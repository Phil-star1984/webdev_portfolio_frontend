import React from "react";
import { Container } from "react-bootstrap";
import philpic from "../assets/1646904938877_02.png";

function PhilippMulfinger() {
  return (
    <div className="bg-black">
      <Container className="d-lg-flex">
        <div className="">
          <img src={philpic} className="mw-sm-100 w-lg-50"></img>
        </div>
        <div className="w-lg-50 d-flex justify-content-center align-items-center">
          <div className="text-secondary mt-sm-4 mb-sm-4">
            <h1>Hi, ich bin Phil👋</h1>
            <h3 className="font-weight-light">
              Seit meinen Anfängen als Senior Art Director Online🎨 und jetzt
              als Webentwickler war mein Karriereweg voller vielfältiger
              Erfahrungen und Möglichkeiten. Jetzt bringe ich meine
              Designkompetenz🖌️ in den digitalen Bereich ein💻 und bin auf
              Technologien wie React, Express.js und die MERN- und PERN-Stacks
              spezialisiert. 🚀 Meine Reise ist eine kontinuierliche
              Weiterentwicklung und ich freue mich darauf, neue Horizonte zu
              erkunden und an spannenden Projekten mitzuarbeiten. Lasst uns
              gemeinsam fantastische digitale Produkte entwickeln!
            </h3>
            {/* <h3 className="font-weight-light">
              From my early days as a Senior Art Director🎨, and now as a Web
              Developer, my career path has been a canvas filled with diverse
              experiences and opportunities. I now bring my design expertise🖌️
              to the digital domain💻 , specializing in technologies like React,
              Express.js, and the MERN & PERN stacks. 🚀 My journey is an
              ongoing evolution, and I'm excited to explore new horizons and
              collaborate on exciting projects. Let's connect and discuss how we
              can create amazing products together!
            </h3> */}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PhilippMulfinger;
