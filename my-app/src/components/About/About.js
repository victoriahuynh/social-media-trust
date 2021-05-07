import React, { Component } from "react";
import './About.css';

class About extends Component {

  render() {
    return (
      <div id="About">
        <h1>Designing for Trust on Social Media</h1>
        <p>
          Social media has changed today’s information and communication world.
          As a result, there has also been a rise in mis/disinformation, which has eroded users’ trust in social media platforms.
          Through research, we look at how design considerations can influence what makes an information system “trustworthy.”
          For this project, we are sponsored by the Center for the Informed Public (CIP) and conducted a literature review.
          We took the insights from the research process and made a design toolkit to help designers building platforms build trust through the design process. 
        </p>
        <img src="graphic.png" alt="landing page graphic" />
        <h1>Project Information</h1>
        <h2>The Problem</h2>
        <p>
          Social media has changed today’s information and communication world. 
          As a result, there has also been a rise in mis/disinformation, which has eroded users’ trust in social media platforms.
        </p>
        <h2>Our Approach</h2>
        <p>Through research, we look at how design considerations can influence what makes an information system “trustworthy.” </p>
        <h1>Sponsor</h1>
        <p>
          For this project, we were sponsored by the Center for the Informed Public (CIP).
          We worked with a PhD student in the iSchool as well as a postdoctoral researcher in the CIP.
        </p>
        <h1>Key Features</h1>
        <h2>Annotated Bibliography</h2>
        <p>Users can view the research that went into creating the toolkit.</p>
        <h2>Design Toolkit</h2>
        <p>Designers can search tags of interest, where they can find more information and recommendations on design features meant to build trust in the platform.</p>
        <h1>Presentation video</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1lrh1SnyptA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h1>Team</h1>
        <p>Aaron Zhao - Project Manager / Designer</p>
        <p>Harkiran Saluja - Researcher / Designer</p>
        <p>Victoria Huynh - Developer</p>
        <p>Jill Nguyen - Developer</p>
        <h1>Project Status</h1>
        <p>This is a University of Washington Information School Capstone project for Winter/Spring 2021.</p>
        <p>This project has been handed off to the sponsor. The new owner is Emily Porter, who can be contacted at <a href="mailto:eeporter@uw.edu">eeporter@uw.edu</a>. Our team is no longer working on the project.</p>
      </div>
    );
  }
}

export default About;