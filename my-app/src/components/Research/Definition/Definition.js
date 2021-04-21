import { Button, Col, Jumbotron, Row } from 'react-bootstrap'
import './Definition.css';

export default function Definition() {
  return (
    <div id="Definition">
      <Jumbotron style={{ backgroundImage: `url('blossom_faded.png')`}}>
        <Row>
          <Col><h1>What is Trust?</h1></Col>
          <Col>
            <p>Our definition of Trust in the context of Social Media.</p>
            <p><Button variant="primary" href="#definition-div">LEARN MORE</Button></p>
          </Col>
        </Row>
      </Jumbotron>
      <div id="definition-div">
        <h4>Definition</h4>
        <p>
          Trust is central to the relationship between the users and designers 
          of social media platforms. Establishing trust through design increases 
          the loyalty users have to a social media brand through promoting 
          reliability, security, and confidence in its platform. There are 
          several ways in which trust can be established through design, such 
          as how a site looks and feels or its makers and affordances. Increasing 
          mis- and disinformation on social media has weakened this relationship, 
          causing many users to distrust social media platforms. We define trust 
          as the feeling of security and comfort that can stem from a person or 
          platform. More specifically, in the context of social media, it requires 
          the user to rely on and have confidence in the platform and its ability 
          to host good information and identify misinformation.
        </p>
        <p>
          We aim to use the term trust in the context of this project in a way 
          that the information on the platform is accurately identified, in 
          addition to how it stores, uses, and protects user shared information, 
          along with how well it works to combats dis/misinformation.
        </p>
        <p>
          Users should be able to rely on a platform to provide them with knowledge 
          about what information should be believed and shared. That being said, 
          we define trust and reliability as two separate terms, with reliability 
          meaning “to depend or lean on,” and trust meaning “to have a set of 
          expectations and to assess whether those expectations are met.” The act 
          of trusting is a two-way street, as trust is a relationship between the 
          user and the platform. This relationship is formed when a user comes in 
          with a set of expectations of what they want to get from using the platform, 
          utilizing the platform, and then assessing their extent to which their 
          expectations are met and then utilizes the platform to assess those 
          expectations. If the platform meets (or mostly meets) their expectations, 
          then they build trust in the platform.
        </p>
      </div>
    </div>
  )
}