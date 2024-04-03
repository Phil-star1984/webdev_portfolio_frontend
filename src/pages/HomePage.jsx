import React from "react";
import Home from "../components/Home.jsx";
import Footer from "../components/Footer.jsx";

function HomePage() {
  const user = {
    name: "Philly",
    age: "40",
    profession: "Web Developer",
  };
  return (
    <>
      <Home user={user} />
      <Footer />
    </>
  );
}

export default HomePage;
