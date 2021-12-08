import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import contentfulOptions from "../utils/contentful-rich-text-options";
import { Document } from "@contentful/rich-text-types";

import Layout from "../components/layout";

type InfoPageProps = {
  title: string;
  description: {
    json: Document;
  };
};

export const InfoPage: React.FC<InfoPageProps> = ({ title, description }) => (
  <Layout>
    <div className="columns bg-primary text-secondary">
      <div className="column col-4 col-md-12 bg-primary sticky-header-column">
        <h1 className="m0">{title}</h1>
      </div>
      <div className="column col-8 hide-md bg-primary sticky-header-column"></div>
      <div className="column col-4 col-md-12"></div>
      <div className="column col-8 col-md-12">
        {" "}
        <div className="rich-text-bulleted-list">
          {documentToReactComponents(description.json, contentfulOptions)}
        </div>
      </div>
    </div>
  </Layout>
);

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulAboutPage {
          title
          description {
            json
          }
        }
      }
    `}
    render={(data) => {
      const { title, description } = data.contentfulAboutPage;
      return <InfoPage title={title} description={description} />;
    }}
  />
);

export default AboutPage;
