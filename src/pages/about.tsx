import React from "react";
import ReactDOM from "react-dom";
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import contentfulOptions from "../utils/contentful-rich-text-options";
import { Link } from "gatsby";

import Layout from "../components/layout";

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulAboutPage {
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
            <h3>{data.contentfulAboutPage.title}</h3>
            <div className="text-italic">
              {documentToReactComponents(
                data.contentfulAboutPage.subtitle.json,
                contentfulOptions
              )}
            </div>
            <div className="divider d-invisible"></div>
            <div className="rich-text-bulleted-list">
              {documentToReactComponents(
                data.contentfulAboutPage.description.json,
                contentfulOptions
              )}
            </div>
          </div>
        </section>
      </Layout>
    )}
  />
);

export default AboutPage;
