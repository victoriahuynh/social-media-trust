import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faUserFriends, faPencilRuler } from '@fortawesome/free-solid-svg-icons'
import './Home.css'

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <div id="idkwhattonamethis">
          <h1>Designing for Trust on Social Media</h1>
          <div class="images">
            <div class="hover-group">
              <img src="dole777-EQSPI11rf68-unsplash.jpg" alt="phone" />
              <div class="overlay">
                <h3>Project Overview</h3>
                <Button variant="warning" href="#overview">LEARN MORE</Button>
              </div>
            </div>
            <div class="hover-group">
              <img src="dole777-EQSPI11rf68-unsplash.jpg" alt="phone" />
              <div class="overlay">
                <h3>What is trust?</h3>
                <Button variant="warning" href="#trust">LEARN MORE</Button>
              </div>
            </div>
            <div class="hover-group">
              <img src="dole777-EQSPI11rf68-unsplash.jpg" alt="phone" />
              <div class="overlay">
                <h3>What can you use this site for?</h3>
                <Button variant="warning" href="#use">LEARN MORE</Button>
              </div>
            </div>
          </div>
        </div>
        <div id="overview">
          <h3>PROJECT OVERVIEW</h3>
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
          <h3>WHAT IS TRUST?</h3>
          <p>
            Before we dive deeper into our work, the term trust needs to be defined. 
            Our approach stems from prior work on the meanings of trust and user 
            experiences with social media platforms.
            Trust is central to the relationship between the users and designers of 
            social media platforms. Establishing trust through design increases the 
            loyalty users have to a social media brand through promoting reliability, 
            security, and confidence in its platform. Increasing mis- and disinformation 
            on social media has weakened this relationship, causing many users to 
            distrust social media platforms.We define trust as the feeling of security 
            and comfort that can stem from a person or platform. More specifically, 
            in the context of social media, it requiresinvolves the user to rely on 
            and have confidence in the platform and its ability to identify misinformation. 
            We aim to use the term trust in the context of this project in a way that 
            the information on the platform is accurately identified, in addition to 
            how it stores, uses, and protects user shared information, along with how 
            well it works to combats dis/misinformation.
          </p>
          <p>
            Users should be able to rely on a platform and the information on it with 
            a sense of knowing that the platform will to provide them with knowledge 
            about on what information should be accepted, believed, and shared. should 
            be accepted and what should be believed and shared. That being said, we 
            define trust and reliability as two separate terms, with reliability 
            meaning “to depend or lean on,” and trust meaning “to have a set of 
            expectations for.” The act of trusting is a two-way street, as trust is a 
            relationship between the user and the platform. This relationship is formed 
            when a user comes in with a set of expectations for the platform and then 
            utilizes the platform to assess those expectations. If the platform meets 
            the expectations, a trusting relationship is formed. 
          </p>
          <p>
            Trust is also a relationship between the users and designers of social media 
            platforms. A designer has expectations for how a user should interact with 
            the platform, and if the user builds a connection with the platform, they 
            thus have a relationship with the designers of it as well. Due to the 
            constant spreading of rumors and false information on social media, many 
            users tend to distrust the accuracy of information being shared and this 
            has in turn caused them to feel insecure about using social media platforms. 
            Trust in this context matters because it increases the loyalty users have 
            in a social media brand and promotes ethical decision-making. If a platform 
            meets the expectations of users, then the users will feel a stronger sense 
            of security and confidence while using the platform, thus building a trusting relationship. 
          </p>
        </div>
        <div id="use">
          <div class="column">
            <span className="icon fa-stack fa-3x">
              <FontAwesomeIcon icon={faCircle} class="circle-icon fa-stack-2x"/>
              <FontAwesomeIcon icon={faUserFriends} class="inner-icon fa-stack-1x"/>
            </span>
            <br />
            <p>Users can learn about the growing issues of misinformation in social media and actively become participants in fighting it.</p>
          </div>
          <div class="column">
          <span className="icon fa-stack fa-3x">
              <FontAwesomeIcon icon={faCircle} class="circle-icon fa-stack-2x"/>
              <FontAwesomeIcon icon={faPencilRuler} class="inner-icon fa-stack-1x"/>
            </span>
            <br />
            <p>Designers can gain insights on how previous social media designs have worked to fight against misinformation and implement trust throughout the design process.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;