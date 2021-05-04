import { Button, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCircle, faUserFriends, faPencilRuler } from '@fortawesome/free-solid-svg-icons'
import './Home.css'

export default function Home() {

  return (
    <div id="Home">
      <Jumbotron className="jumbotron jumbotron-fluid" style={{backgroundImage: `url('blossom.png')`}}>
        <div class="jumbotron-inner">
          <h1>Designing for Trust on Social Media</h1>
          <p>An introduction to the methodology of building trust on social media platforms</p>
          <Button variant="primary" href="#overview">LEARN MORE</Button>
        </div>
      </Jumbotron>
      <div id="overview">
        <h4>PROJECT OVERVIEW</h4>
        <p>
          Social media has changed today’s information and communication landscape. 
          Individuals and communities often use these platforms as a resource for 
          knowledge sharing. However, a rise in the spread of mis/disinformation 
          has increasingly served to blur the lines between fact and fiction in ways 
          that have eroded trust in these platforms and information itself. As 
          different types of social media platforms work to reestablish trust it is 
          important to understand how design considerations influence and contextualize 
          our understanding of “trustworthy” information systems.
        </p>
      </div>
      <div id="trust">
        <h4>WHAT IS TRUST?</h4>
        <p>
          We define trust as the feeling of security and comfort that can stem from 
          a person or platform. A trusting relationship is formed when a user comes 
          in with a set of expectations of what they want to get from using the platform 
          and then uses the platform to assess those expectations.
        </p>
        <h5 class="example-heading">Example</h5>
        <img src="example.svg" alt="trust example" />
        <Link to="/definition">
          <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" />
          Learn more about our definition of Trust
        </Link>
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