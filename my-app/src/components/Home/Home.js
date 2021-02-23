import React, { Component } from "react";
import './Home.css';

class Home extends Component {

  render() {
    return (
      <div>
        <img src="stock/pexels-kerde-severin-1542252.jpg" className="img1"/>
        <p className="home">
          Social media has changed today’s information and communication world. Individuals and communities
          often use these platforms as a resource for knowledge sharing. However, a rise in the spread of mis- and
          disinformation has increasingly served to blur the lines between fact and fiction in ways that have eroded
          trust in these platforms and information itself. As different types of social media platforms work to
          reestablish trust it is important to understand how design considerations influence and contextualize our
          understanding of “trustworthy” information systems. The need not being met is the fact that there are fake 
          news all over social media platforms and people aren't confident in the information they take in on social 
          media platforms as a result. There is also no awareness on what the facts are in addition to whether people 
          post information that conveys the right message. As a result of inaction, there will continue to be a decrease 
          in trust and social media could continue to be used for the wrong reasons or perceptions. 
          Since this problem is so broad, there are several directions we can go into, such as community discussions 
          about misinformation on social media or defining trust in a certain context, whether that be through the 
          people, platform, or the information itself. Our sponsor mostly wants the literature review to be done as a 
          result of this capstone project. However, with two developers on our team, we intend to create an information 
          solution by building a platform of sorts, which our sponsor approves of. We ultimately decide on an educational 
          website that exhibits our research and our findings of good and bad designs when it comes to building different 
          aspects of trust. We aim to promote digital literacy in misinformation, the role social media plays, and the 
          conscious and unconscious design that influence users trust in them.
        </p>
        <img src="stock/pexels-lisa-fotios-1092671.jpg" className="img2" />
        <p>Photo by Kerde Severin from Pexels / Photo by Lisa Fotios from Pexels</p>
      </div>
    );
  }
}

export default Home;