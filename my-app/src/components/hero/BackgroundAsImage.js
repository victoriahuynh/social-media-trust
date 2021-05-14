import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import '../Home/Home.css'

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const Container = styled.div`
  ${tw`relative -mx-8 -mt-10 bg-center bg-cover`}
  background-image: url("blossom.png");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-800 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-4xl mx-20`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-1/6 lg:w-1/6 mt-16 lg:mt-0 lg:pl-8`;
const SingleColumn = tw.div`max-w-full mx-auto py-20 lg:py-2`;

const Heading = styled.h1`
  ${tw`text-3xl text-center my-10 lg:text-left sm:text-4xl lg:text-4xl xl:text-7xl font-bold text-gray-100 leading-relaxed`}
  span {
    ${tw`text-xl inline-block sm:text-2xl lg:text-3xl xl:text-4xl mt-2 font-normal`}
  }
`;

const PrimaryAction = tw.button`px-8 py-3 sm: ml-auto lg:ml-custom mt-10 mb-5 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-3 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

export default () => {
  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <SingleColumn>
            <Heading>
              <h1>Designing for Trust on Social Media</h1>
              <span>An introduction to the methodology of building trust on social media platforms</span>
            </Heading>
            
            <PrimaryAction>LEARN MORE</PrimaryAction>
            </SingleColumn>
      </HeroContainer>
    </Container>
  );
};
