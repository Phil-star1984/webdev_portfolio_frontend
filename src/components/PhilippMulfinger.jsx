import React from "react";
import { Container } from "react-bootstrap";
import philpic from "../assets/1646904938877_02.png";

function PhilippMulfinger() {
  return (
    <div className="bg-black">
      <Container className="d-lg-flex">
        <img
          src={philpic}
          className="img-fluid mw-100 w-lg-50"
          alt="Philipp Mulfinger"
        />
        <div className="w-lg-50 d-flex justify-content-center align-items-center">
          <div className="text-secondary mt-4 mb-4">
            <h1>Hi, ich bin Phil👋</h1>
            <h3 className="font-weight-light">
              Seit meinen Anfängen als Art Director Online🎨 und jetzt als Web
              Developer war mein Karriereweg voller vielfältiger Erfahrungen und
              Möglichkeiten. Jetzt bringe ich meine Designkompetenz🖌️ in die Web
              & App Entwicklung ein💻 und bin auf Technologien wie React,
              Express.js und den MERN-Stacks spezialisiert. 🚀 Meine Reise ist
              eine kontinuierliche Weiterentwicklung und ich freue mich darauf,
              neue Horizonte zu erkunden. Lasst uns gemeinsam fantastische
              digitale Produkte entwickeln!
            </h3>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PhilippMulfinger;
