import React, { Component } from "react";
import { Card , CardDeck } from 'react-bootstrap';
import './About.css';

class About extends Component {

  render() {
    return (
      <div>
        <h1>Our Team</h1>
        <CardDeck className="carddeck">
        <Card>
          <Card.Img variant="top" src="headshots/aaron.jpg" alt="headshot" />
          <Card.Body>
            <Card.Title>Aaron Zhao</Card.Title>
            <Card.Text>
              Product Manager / Designer
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src="headshots/harki.png" alt="headshot" />
          <Card.Body>
            <Card.Title>Harkiran Saluja</Card.Title>
            <Card.Text>
              Researcher / Designer
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src="headshots/vicky.png" alt="headshot" />
          <Card.Body>
            <Card.Title>Victoria Huynh</Card.Title>
            <Card.Text>
              Developer
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src="headshots/jill.jpg" alt="headshot" />
          <Card.Body>
            <Card.Title>Jill Nguyen</Card.Title>
            <Card.Text>
              Developer
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <h1>Our Sponsor</h1>
      <p>https://www.cip.uw.edu/about/</p>
      </div>
    );
  }
}

export default About;