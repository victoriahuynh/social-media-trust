import React, { Component } from "react";
import { Card , CardDeck, Col, Row } from 'react-bootstrap';
import './About.css';

class About extends Component {

  render() {
    return (
      <div id="About">
        <div className="team">
          <h3>Our Team</h3>
          <CardDeck>
            <Row>
              <Col>
                <Card>
                  <Card.Img variant="top" src="headshots/aaron.jpg" alt="headshot" />
                  <Card.Body>
                    <Card.Title>Aaron Zhao</Card.Title>
                    <Card.Text>
                      Product Manager / Designer
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="card">
                  <Card.Img variant="top" src="headshots/harki.png" alt="headshot" />
                  <Card.Body>
                    <Card.Title>Harkiran Saluja</Card.Title>
                    <Card.Text>
                      Researcher / Designer
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="card">
                  <Card.Img variant="top" src="headshots/vicky.png" alt="headshot" />
                  <Card.Body>
                    <Card.Title>Victoria Huynh</Card.Title>
                    <Card.Text>
                      Developer
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="card">
                  <Card.Img variant="top" src="headshots/jill.jpg" alt="headshot" />
                  <Card.Body>
                    <Card.Title>Jill Nguyen</Card.Title>
                    <Card.Text>
                      Developer
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </CardDeck>
        </div>
        <div className="sponsor">
          <h3>Our Sponsor</h3>
          <p>
            The <strong>Center for the Informed Public (CIP)</strong> is an assembly of world-class researchers, 
            labs, thought leaders, and practitioners to translate research about misinformation 
            and disinformation into policy, technology design, curriculum development, and public 
            engagement.
            <br/>
            This interdisciplinary effort at the University of Washington is led by 
            the Information School, Human Centered Design & Engineering and the School of Law, 
            with collaboration from numerous other university and community partners.
          </p>
        </div>
      </div>
    );
  }
}

export default About;