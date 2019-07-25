import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import styled from '@emotion/styled'

const SubscribeOverlayLogo = styled.img`
  position: fixed;
  top: 23px;
  left: 30px;
  height: 30px;
`;

interface SiteNavLogoProps {
  logo?: {
    childImageSharp: {
      fixed: any;
    };
  };
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const SubscribeLogo = () => (
  <StaticQuery
    query={graphql`
      query SubscribeOverlayLogo {
        logo: file(relativePath: { eq: "img/ghost-logo.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    // tslint:disable-next-line:react-this-binding-issue
    render={(data: SiteNavLogoProps) =>
      data.logo && (
        <SubscribeOverlayLogo src={data.logo.childImageSharp.fixed.src} alt={data.site.siteMetadata.title} />
      )}
  />
);

export default SubscribeLogo;
