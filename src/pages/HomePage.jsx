import React from "react";
import Home from "../components/Home.jsx";
import Footer from "../components/Footer.jsx";
import BrandVision from "../components/BrandVision.jsx";
import ProjectPortfolio from "../components/ProjectPortfolio.jsx";

function HomePage() {
  const user = {
    name: "Philly",
    age: "40",
    profession: "Web Developer",
  };
  return (
    <>
      <Home user={user} />
      <BrandVision />
      <ProjectPortfolio />
      <Footer />
    </>
  );
}

export default HomePage;
