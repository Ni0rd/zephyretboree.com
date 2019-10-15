import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image/withIEPolyfill';
import Title from '../Title';
import SubTitle from '../SubTitle';

const FirstColumn = styled.div`
  background: #ffffff;
  padding: 30px;
`;

const Image1 = styled.img`
  display: block;
  margin: auto;
`;

const Text1 = styled.div``;
const Text2 = styled.div``;
const Text3 = styled.div`
  margin-top: 30px;
`;

const AboutOrigins = ({ title, subTitle, text1, text2, text3 }) => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "pages/about/team.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 940, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <div className="columns">
          <div className="column">
            <FirstColumn>
              <Image1 src="/images/icons/co2.svg" alt="" width="85" />
              <Text1 dangerouslySetInnerHTML={{ __html: text1 }} />
            </FirstColumn>
          </div>
          <div className="column">
            <Text2 dangerouslySetInnerHTML={{ __html: text2 }} />
          </div>
        </div>
        <GatsbyImage fluid={data.image.childImageSharp.fluid} />
        <Text3 dangerouslySetInnerHTML={{ __html: text3 }} />
      </>
    )}
  />
);

AboutOrigins.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired,
};

export default AboutOrigins;
