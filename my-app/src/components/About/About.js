import React, { Component } from "react";
import { Card , CardDeck, Col, Row } from 'react-bootstrap';
import './About.css';

class About extends Component {

  render() {
    return (
      <div id="About">
        <h1>Title</h1>
        <p>Tagline</p>
        <h1>Image / Graphic</h1>
        <h1>Project Information</h1>
        <h1>Sponsor</h1>
        <h1>Key Features</h1>
        <h1>Presentation video</h1>
        <h1>Team</h1>
        <h1>Project Status</h1>
      </div>
    );
  }
}

export default About;