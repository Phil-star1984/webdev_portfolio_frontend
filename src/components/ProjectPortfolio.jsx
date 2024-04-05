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

function ProjectPortfolio() {
  return (
    <Container>
      <Row xs={1} md={2} xl={3} className="g-4 pt-5 pb-5">
        <Col>
          <Card className="text-secondary" data-bs-theme="dark">
            <Card.Img variant="top" src={orbit} className="bg-black" />
            <Card.Body>
              <Card.Title>Orbit Gaming Store</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary" className="mr-2">
                Website
              </Button>
              <Button variant="primary">Repository</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-secondary" data-bs-theme="dark">
            <Card.Img variant="top" src={hackernewstwo} className="bg-black" />
            <Card.Body>
              <Card.Title>HackerNews Website</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary" className="mr-2">
                Website
              </Button>
              <Button variant="primary">Repository</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-secondary" data-bs-theme="dark">
            <Card.Img variant="top" src={aibro} className="bg-black" />
            <Card.Body>
              <Card.Title>AI.Bro App</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary" className="mr-2">
                Website
              </Button>
              <Button variant="primary">Repository</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-secondary" data-bs-theme="dark">
            <Card.Img variant="top" src={csvdata} className="bg-black" />
            <Card.Body>
              <Card.Title>CSV Data Chart</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary" className="mr-2">
                Website
              </Button>
              <Button variant="primary">Repository</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-secondary" data-bs-theme="dark">
            <Card.Img variant="top" src={hackernewstwo} className="bg-black" />
            <Card.Body>
              <Card.Title>HackerNews Website</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary" className="mr-2">
                Website
              </Button>
              <Button variant="primary">Repository</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-secondary" data-bs-theme="dark">
            <Card.Img variant="top" src={aibro} className="bg-black" />
            <Card.Body>
              <Card.Title>AI.Bro App</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary" className="mr-2">
                Website
              </Button>
              <Button variant="primary">Repository</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectPortfolio;
