import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { InfoPage } from "./about";

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulMethodologyPage {
          title
          description {
            json
          }
        }
      }
    `}
    render={(data) => {
      const { title, description } = data.contentfulMethodologyPage;
      return <InfoPage title={title} description={description} />;
    }}
  />
);

export default AboutPage;
