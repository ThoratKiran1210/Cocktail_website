import React from "react";
import "../App.css";

const aboutpagecontainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  // height: "100vh",
  margin: "2rem",
  gap: 10,
};
const AboutPage = () => {
  return (
    <div className="about-page-container">
      <div style={aboutpagecontainerStyle}>
        <h2 className="marquee-text">About Cocktail Website</h2>
        <p className="about-text">
          Welcome to the Cocktail Website! This website is dedicated to
          providing information about various cocktail drinks. We offer a wide
          range of cocktail recipes, bartending tips, and more. Whether you're a
          cocktail enthusiast or a beginner, you'll find something interesting
          here.
        </p>
        <p>
          Explore our collection of cocktail recipes and learn how to mix your
          favorite drinks. We are passionate about cocktails and aim to share
          our knowledge with you. If you have any questions or need assistance,
          feel free to contact us using the "Contact" page.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
