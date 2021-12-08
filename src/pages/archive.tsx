import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { InfoPage } from "./about";

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulArchivePage {
          title
          description {
            json
          }
        }
      }
    `}
    render={(data) => {
      const { title, description } = data.contentfulArchivePage;
      return <InfoPage title={title} description={description} />;
    }}
  />
);

export default AboutPage;
