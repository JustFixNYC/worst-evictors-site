import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "gatsby";

import "../styles/index.scss";

import Layout from "../components/layout";
import contentfulOptions from "../utils/contentful-rich-text-options";

const LandingPage = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulLandingPage {
          openingTitle {
            json
          }
          openingSubtitle {
            json
          }
          mapTitle
          mapDescription {
            json
          }
          mapButton
          mapBackground {
            fluid {
              aspectRatio
              src
              srcSet
              sizes
            }
          }
          kyrTitle
          kyrDescription {
            json
          }
          kyrContent {
            json
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <div className="homepage">
          <div className="columns bg-primary text-secondary">
            <div className="column col-4">
              <h1>
                {documentToReactComponents(
                  data.contentfulLandingPage.openingTitle.json
                )}
              </h1>
              {documentToReactComponents(
                data.contentfulLandingPage.openingSubtitle.json
              )}
            </div>
            <div className="column col-8"></div>
          </div>
          <div className="columns bg-secondary text-primary">
            <div className="column col-4">
              <div className="eyebrow">Worst Evictors Map</div>
              <h1>{data.contentfulLandingPage.mapTitle}</h1>
              {documentToReactComponents(
                data.contentfulLandingPage.mapDescription.json
              )}
              <Link to="/map" className="btn btn-outline-primary">
                {data.contentfulLandingPage.mapButton}
                <i className="icon icon-forward ml-2"></i>
              </Link>
            </div>
            <div className="column col-8"></div>
          </div>

          <div className="columns bg-primary text-secondary">
            <div className="column col-4">
              <div className="eyebrow">know your tenant rights </div>
              <h1>{data.contentfulLandingPage.kyrTitle}</h1>
              {documentToReactComponents(
                data.contentfulLandingPage.kyrDescription.json
              )}
            </div>
            <div className="column col-8"></div>
            <div className="column col-4"></div>
            <div className="column col-8">
              {" "}
              <div className="rich-text-bulleted-list">
                {documentToReactComponents(
                  data.contentfulLandingPage.kyrContent.json,
                  contentfulOptions
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )}
  />
);

export default LandingPage;
