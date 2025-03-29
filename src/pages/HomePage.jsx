import React from "react";
import Home from "../components/Home.jsx";
import Footer from "../components/Footer.jsx";
import BrandVision from "../components/BrandVision.jsx";
import ProjectPortfolio from "../components/ProjectPortfolio.jsx";
import JobTicker from "../components/JobTicker.jsx";
import PhilippMulfinger from "../components/PhilippMulfinger.jsx";
import Test from "../components/Test.jsx";

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
      <JobTicker />
      <ProjectPortfolio />
      <PhilippMulfinger />
      {/* <Test /> */}

      <Footer />
    </>
  );
}

export default HomePage;
