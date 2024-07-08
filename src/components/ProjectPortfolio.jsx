import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
/* import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem"; */
import Button from "react-bootstrap/Button";
import aibro from "../assets/ai_news_mockup.jpg";
import hackernews from "../assets/hackernews_mockup.jpg";
import orbit from "../assets/orbit_mockup.jpg";
import csvdata from "../assets/csvdata_mockup.jpg";
import hackernewstwo from "../assets/hackernews_mockup_02.jpg";
import cody from "../assets/codyapp_mockup.jpg";
import mosaicify from "../assets/mosaicify_mockup.jpg";

function ProjectPortfolio() {
  return (
    <Container>
      <p className="text-dark fs-1 text-center pt-5 mb-0">
        Full-Stack Web & App Projekte
      </p>
      <Row xs={1} md={2} xl={3} className="g-4 pt-5 pb-5">
        <Col>
          <Card className="text-secondary" data-bs-theme="dark">
            <Card.Img variant="top" src={orbit} className="bg-black" />
            <Card.Body>
              <Card.Title className="text-white-50">Orbit Gaming Store</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button
                variant="warning"
                className="mr-2 phil-button"
                target="_blank"
                href="https://orbitgaming.netlify.app"
              >
                Website
              </Button>
              <Button
              className="phil-button"
                variant="primary"
                target="_blank"
                href="https://github.com/Phil-star1984/orbit_frontend"
              >
                Repository
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-secondary" data-bs-theme="dark">
            <Card.Img variant="top" src={hackernewstwo} className="bg-black" />
            <Card.Body>
              <Card.Title className="text-white-50">HackerNews Mobile App</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button
                variant="primary"
                className="mr-2"
                target="_blank"
                href="https://hn-new.vercel.app"
              >
                Website
              </Button>
              <Button
                variant="primary"
                target="_blank"
                href="https://hn-new.vercel.app"
              >
                Repository
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-secondary" data-bs-theme="dark">
            <Card.Img variant="top" src={aibro} className="bg-black" />
            <Card.Body>
              <Card.Title className="text-white-50">AI.Bro Web App</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button
                variant="primary"
                className="mr-2"
                target="_blank"
                href="https://ai-bro.vercel.app"
              >
                Website
              </Button>
              <Button
                variant="primary"
                target="_blank"
                href="https://github.com/Phil-star1984/ai_news"
              >
                Repository
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-secondary" data-bs-theme="dark">
            <Card.Img variant="top" src={csvdata} className="bg-black" />
            <Card.Body>
              <Card.Title className="text-white-50">CSV Data Dashboard</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button
                variant="primary"
                className="mr-2"
                target="_blank"
                href="https://kickass-projects.vercel.app/weekthree"
              >
                Website
              </Button>
              <Button
                variant="primary"
                target="_blank"
                href="https://github.com/Phil-star1984/kickass_projects"
              >
                Repository
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-secondary" data-bs-theme="dark">
            <Card.Img variant="top" src={cody} className="bg-black" />
            <Card.Body>
              <Card.Title className="text-white-50">Cody AI Chat App</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button
                variant="primary"
                className="mr-2"
                target="_blank"
                href="https://cody-app.netlify.app/"
              >
                Website
              </Button>
              <Button
                variant="primary"
                target="_blank"
                href="https://github.com/Phil-star1984/cody_frontend"
              >
                Repository
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-secondary" data-bs-theme="dark">
            <Card.Img variant="top" src={mosaicify} className="bg-black" />
            <Card.Body>
              <Card.Title className="text-white-50">Mosaicify Web App</Card.Title>
              <Card.Text>
                Mit der Mosaicify Web App lassen sich Bild-Mosaike für Social
                Media innerhalb von Sekunden erstellen.
              </Card.Text>
              <Button
                variant="primary"
                className="mr-2"
                target="_blank"
                href="https://mosaicify.vercel.app"
              >
                Website
              </Button>
              <Button
                variant="primary"
                target="_blank"
                href="https://github.com/Phil-star1984/mosaicify"
              >
                Repository
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectPortfolio;
