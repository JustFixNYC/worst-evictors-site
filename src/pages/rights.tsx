import React from "react";
import ReactDOM from "react-dom";
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import contentfulOptions from "../utils/contentful-rich-text-options";
import { Link } from "gatsby";

import "../styles/rights.scss";

import Layout from "../components/layout";

const RightsPage = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulKnowYourRightsPage {
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
    render={data => (
      <Layout>
        <section id="context" className="landing-context hero">
          <div className="hero-body">
            <h3>{data.contentfulKnowYourRightsPage.title}</h3>
            <div className="text-italic">
              {documentToReactComponents(
                data.contentfulKnowYourRightsPage.subtitle.json,
                contentfulOptions
              )}
            </div>
            <div className="divider d-invisible"></div>
            <div className="rich-text-bulleted-list">
              {documentToReactComponents(
                data.contentfulKnowYourRightsPage.description.json,
                contentfulOptions
              )}
            </div>
          </div>
        </section>
      </Layout>
    )}
  />
);

export default RightsPage;
