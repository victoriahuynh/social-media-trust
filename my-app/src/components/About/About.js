import React from "react";
import './About.css';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import styled from "styled-components";
import tw from "twin.macro";
import MainFeature from "components/features/TwoColWithSteps.js";
import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import { SectionHeading } from "components/misc/Headings.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

import SupportIconImage from "images/book-solid.svg";
import ShieldIconImage from "images/pencil-ruler-solid.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
const Heading = tw(SectionHeading)`w-full`;
const VerticalSpacer = tw.div`mt-10 w-full`;
const Container = tw.div`relative`;
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

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
      <MainFeature
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
      <Container>
        <SingleColumn>
          <Heading>Presentation Video</Heading>
          <VerticalSpacer></VerticalSpacer>
          <StyledResponsiveVideoEmbed
              url="https://www.youtube.com/embed/Fwa0J7LBo4c"
              background="transparent"
            />
        </SingleColumn>
      </Container>
      <TeamCardGrid 
        subheading={<Subheading>About Us</Subheading>}
      />
    </AnimationRevealPage>
  );
};
