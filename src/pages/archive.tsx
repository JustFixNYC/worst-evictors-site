import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { InfoPage } from "./about";

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulArchivePage {
          title
          subtitle {
            json
          }
          description {
            json
          }
        }
      }
    `}
    render={data => {
      const { title, subtitle, description } = data.contentfulArchivePage;
      return (
        <InfoPage title={title} subtitle={subtitle} description={description} />
      );
    }}
  />
);

export default AboutPage;
