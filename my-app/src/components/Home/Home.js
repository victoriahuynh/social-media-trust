import React, { useState } from 'react'
import { Button, Col, Jumbotron, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCircle, faUserFriends, faPencilRuler } from '@fortawesome/free-solid-svg-icons'
import './Home.css'

export default function Home() {
  const [showText, setShowText] = useState(false);

  return (
    <div id="Home">
      <Jumbotron class="jumbotron" style={{ backgroundImage: `url('blossom_faded.png')`}}>
        <Row>
          <Col><h1>Designing for Trust on Social Media</h1></Col>
          <Col>
            <p>An introduction to the methodology of building trust on social media platforms</p>
            <p><Button variant="primary" href="#overview">LEARN MORE</Button></p>
          </Col>
        </Row>
      </Jumbotron>
      <div id="overview">
        <h4>PROJECT OVERVIEW</h4>
        <p>
          Social media has changed today’s information and communication landscape. 
          Individuals and communities often use these platforms as a resource for 
          knowledge sharing. However, a rise in the spread of mis- and disinformation 
          has increasingly served to blur the lines between fact and fiction in ways 
          that have eroded trust in these platforms and information itself. As 
          different types of social media platforms work to reestablish trust it is 
          important to understand how design considerations influence and contextualize 
          our understanding of “trustworthy” information systems.
        </p>
      </div>
      <div id="trust">
        <h4>WHAT IS TRUST?</h4>
        { showText ?
          <img src="visual_text.svg" alt="visualization of trust"/>
          :
          <img src="visual.svg" alt="visualization of trust"/>
        }
        <Button variant="link" onClick={() => setShowText(!showText)}>
          <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" />
          { showText ?
            'Ba-da-ba-da-ba-be bop bop bodda bope'
            :
            'Learn more about our definition of Trust'
          }
        </Button>
      </div>
      <div id="use">
        <div className="column">
          <span className="icon fa-stack fa-3x">
            <FontAwesomeIcon icon={faCircle} className="circle-icon fa-stack-2x"/>
            <FontAwesomeIcon icon={faUserFriends} className="inner-icon fa-stack-1x"/>
          </span>
          <br />
          <p>Users can learn about the growing issues of misinformation in social media and actively become participants in fighting it.</p>
        </div>
        <div className="column">
        <span className="icon fa-stack fa-3x">
            <FontAwesomeIcon icon={faCircle} className="circle-icon fa-stack-2x"/>
            <FontAwesomeIcon icon={faPencilRuler} className="inner-icon fa-stack-1x"/>
          </span>
          <br />
          <p>Designers can gain insights on how previous social media designs have worked to fight against misinformation and implement trust throughout the design process.</p>
        </div>
      </div>
    </div>
  );
}