import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import aibro from "../assets/ai_news_mockup.jpg";
import hackernews from "../assets/hackernews_mockup.jpg";
import orbit from "../assets/orbit_mockup.jpg";
import hackernewstwo from "../assets/hackernews_mockup_02.jpg";

export default function Home({ user }) {
  return (
    <>
      <Navbar expand="lg" fixed="top" /* bg="dark" */ data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="text-secondary">
            WebDev // {user.name.slice("l", 4) + "ipp" + " Mulfinger"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="text-secondary">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="text-secondary">
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={aibro} alt="First slide" />
          <Carousel.Caption>
            <h1 className="text-white">Get futureproof. With AI.Bro</h1>
            <p className="text-secondary">
              AI.Bro is your go-to app for staying at the cutting edge of AI and
              tech trends. This user-friendly app offers concise and
              up-to-the-minute insights into the world of artificial
              intelligence, virtual reality, and the latest tech developments.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hackernews} alt="Second slide" />
          <Carousel.Caption>
            <h1 className="text-secondary">HackerNews App</h1>
            <p className="text-secondary">
              Project “HackerNews” is using the official Hackernews API and
              inspired by the look and feel of the Matrix movie, users can enjoy
              staying informed about current events while being immersed in the
              iconic visual style of the Matrix.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={orbit} alt="Third slide" />
          <Carousel.Caption>
            <h1 className="text-white">Orbit Gaming Store</h1>
            <p className="text-secondary">
              Orbit Gaming is an E-Commerce store for cutting-edge games and
              accessories. It guarantees great usability and topicality through
              using the REST APIs from RAWG.io, CheapShark and ChatGPT.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hackernewstwo}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 className="text-white">HackerNews App</h1>
            <p className="text-secondary">
              Project “HackerNews” is using the official Hackernews API and
              inspired by the look and feel of the Matrix movie, users can enjoy
              staying informed about current events while being immersed in the
              iconic visual style of the Matrix.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
