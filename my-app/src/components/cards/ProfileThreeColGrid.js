import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";

const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/2 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  }
  .description {
    ${tw`mt-1 w-3/4 text-base font-medium text-secondary-200`}
  }
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  heading = "Our Team",
  subheading = "About Us",
  cards = [
    {
      imageSrc: "headshots/aaron.jpg",
      position: "Project Manager / Designer",
      name: "Aaron Zhao",
      description: "Aaron is going into his senior year as an Informatics student. He is actively involved in the iSchool community and will be serving as next year's IUGA president.",
      links: [
        {
          url: "https://www.linkedin.com/in/zhaoaaron/",
          icon: LinkedinIcon,
        },
      ],
    },
    {
      imageSrc: "headshots/harki.png",
      position: "Researcher / Designer",
      name: "Harkiran Saluja",
      description: "Harkiran is graduating with the Informatics HCI track and a Gender, Women & Sexuality Studies Minor. After graduation, she will be pursuing a Master of Human-Computer Interaction at CMU.",
      links: [
        {
          url: "https://www.linkedin.com/in/harkiran-kaur-saluja/",
          icon: LinkedinIcon,
        },
      ],
    },
    {
      imageSrc: "headshots/victoria.jpg",
      position: "Developer",
      name: "Victoria Huynh",
      description: "Victoria is graduating with the Informatics HCI track and an Entrepreneurship Minor. After graduation, she will be working full-time as a software engineer at Atlassian.",
      links: [
        {
          url: "https://www.linkedin.com/in/huynhvictoria/",
          icon: LinkedinIcon,
        },
      ],
    },
    {
      imageSrc: "headshots/jill.jpg",
      position: "Developer",
      name: "Jill Nguyen",
      description: "Jill is graduating with the Informatics custom track. After graduation, she will be working full-time as a software engineer at Amazon.",
      links: [
        {
          url: "hhttps://www.linkedin.com/in/jill-nguyen/",
          icon: LinkedinIcon,
        },
      ],
    },
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <span className="description">{card.description}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
