import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithSteps.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
// import Features from "components/features/ThreeColSimple.js";
import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
const Heading = tw(SectionHeading)`w-full`;
const VerticalSpacer = tw.div`mt-10 w-full`;
const steps = [
  {
    heading: "Cause",
    description: "Social media has changed today’s information and communication world."
  },
  {
    heading: "Effect",
    description: "As a result, there has also been a rise in mis/disinformation, which has eroded users’ trust in social media platforms."
  },
  {
    heading: "Analysis",
    description: "Through research, we look at how design considerations can influence what makes an information system “trustworthy.”"
  }
];

export default () => {
  return (
    <AnimationRevealPage>
      <MainFeature1
        subheading={<Subheading>Project Context</Subheading>}
        heading="Designing for Trust On Social Media"
        imageSrc="graphic.png"
        steps={steps}
      />
      <Features
        heading="Key Features"
        subheading="OUR PROJECT"
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Annotated Bibliography",
            description: "Users can view the research that went into creating the toolkit."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Design Toolkit",
            description: "Designers can search tags of interest, where they can find more information and recommendations on design features meant to build trust in the platform."
          }
        ]}
      />
      <Heading>Presentation Video</Heading>
      <VerticalSpacer></VerticalSpacer>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/1lrh1SnyptA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <TeamCardGrid 
        subheading={<Subheading>About Us</Subheading>}
      />
    </AnimationRevealPage>
  );
};
