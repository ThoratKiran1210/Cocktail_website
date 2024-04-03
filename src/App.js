import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import PageNotFound from "./Components/NotFoundPage";
import SearchBox from "./Components/SearchBox";
import HomePage from "./Pages/Home";
import ProductDetails from "./Pages/Details";
import ContactPage from "./Components/ContactPage";
import AboutPage from "./Components/About";
import Header from "./Components/Header";
// import LoginPage from "./Components/Login";

function App() {
  // const [hasVisitedBefore, setHasVisitedBefore] = useState(
  //   localStorage.getItem("visitedBefore") === "true"
  // );

  // const handleLogin = () => {
  //   setHasVisitedBefore(true);
  //   localStorage.setItem("visitedBefore", "true");
  // };

  return (
    <>
      <Header />
      <Routes>
          <>
            <Route
              path="/"
              element={
                <>
                  <Layout>
                    <SearchBox />
                    <HomePage />
                  </Layout>
                </>
              }
            />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<PageNotFound />} />
          </>
        {/* )} */}
      </Routes>
    </>
  );
}

export default App;

