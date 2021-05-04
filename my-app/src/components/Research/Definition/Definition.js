import { Jumbotron } from 'react-bootstrap'
import './Definition.css';

export default function Definition() {
  return (
    <div id="Definition">
      <Jumbotron style={{ backgroundImage: `url('blossom.png')`}}>
        <div class="jumbotron-inner">
          <h1>What is Trust?</h1>
          <p>Our definition of Trust in the context of Social Media.</p>
        </div>
      </Jumbotron>
      <div id="definition-div">
        <h4>DEFINITION</h4>
        <ul>
          <li>
            Trust is central to the relationship between the users and designers 
            of social media platforms. Establishing trust through design increases 
            the loyalty users have to a social media brand through promoting 
            reliability, security, and confidence in the platform.
          </li>
          <li>
            There are several ways in which trust can be established through design, 
            such as how a site looks and feels or its makers and affordances. 
            Increasing mis- and disinformation on social media has weakened this 
            relationship, causing many users to distrust social media platforms.
          </li>
          <li>
            We define trust as the feeling of security and comfort that can stem 
            from a person or platform. More specifically, in the context of social 
            media, it requires the user to rely on and have confidence in the 
            platform and its ability to host good information and identify misinformation. 
          </li>
          <li>
            Users should be able to rely on a platform to provide them with knowledge 
            about what information should be believed and shared. 
          </li>
          <li>
            The act of trusting is a two-way street, as trust is a relationship between 
            the user and the platform. This relationship is formed when a user comes in 
            with a set of expectations of what they want to get from using the platform, 
            utilizing the platform, and then assessing their extent to which their 
            expectations are met and then utilizes the platform to assess those expectations. 
            If the platform meets (or mostly meets) their expectations, then they build 
            trust in the platform.
          </li>
        </ul>
        <img src="visual.svg" />
      </div>
    </div>
  )
}