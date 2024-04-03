import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCocktails } from "../Features/cocktail";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Components/Layout";
import SpinnerAnim from "../Components/Animi";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const [modifendCocktail, setmodifendCocktail] = useState([]);
  const { loading, cocktail } = useSelector((state) => ({ ...state.app }));
  const [quantity, setQuantity] = useState(1); // Initialize quantity to 1
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSingleCocktails({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: img,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        img,
        info,
        category,
        glass,
        ingredients,
      };
      setmodifendCocktail(newCocktail);
    } else {
      setmodifendCocktail(null);
    }
  }, [id, cocktail]);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleBuyNow = () => {
    navigate("../Features/cocktail.js");
  };

  if (!modifendCocktail) {
    return <h2>No Cocktail Details</h2>;
  } else {
    const { name, img, info, category, glass, ingredients } = modifendCocktail;
    return (
      <>
        {loading ? (
          <SpinnerAnim />
        ) : (
          <Layout>
            <div className="container mt-4">
              <Link to="/" className="btn btn-info">
                GO BACK
              </Link>
              <div className="row mt-4">
                <div className="col-md-5">
                  <img src={img} alt={name} height={300} width={400} />
                </div>
                <div className="col-md-5">
                  <h2>Name : {name}</h2>
                  <p className="mt-1">Category : {category}</p>
                  <p>Info : {info}</p>
                  <p>Glass : {glass}</p>
                  <p>
                    Ingredients : {ingredients ? ingredients.join(", ") : "N/A"}
                  </p>
                  <form>
                    <label htmlFor="quantity">Quantity: &nbsp; </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      value={quantity}
                      onChange={handleQuantityChange}
                      style={{ width: "50px", height: "30px" }} // Adjust the width and height as needed
                    />
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleBuyNow}
                    >
                      BUY NOW
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Layout>
        )}
      </>
    );
  }
};

export default ProductDetails;
