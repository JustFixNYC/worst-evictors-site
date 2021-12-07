import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "gatsby";

import "../styles/index.scss";

import Layout from "../components/layout";

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
          openingBackground {
            fluid {
              aspectRatio
              src
              srcSet
              sizes
            }
          }
          listTitle
          listDescription {
            json
          }
          listBackground {
            fluid {
              aspectRatio
              src
              srcSet
              sizes
            }
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
          contextTitle
          contextDescription {
            json
          }
          efnycTitle
          efnycDescription {
            json
          }
          efnycButton
          kyrTitle
          kyrDescription {
            json
          }
          kyrButton
        }
      }
    `}
    render={data => (
      <Layout>
        <div className="homepage">
          <section>
            <div className="container landing-intro">
              <div className="columns">
                <div className="column col-6">
                  <h1>
                    {documentToReactComponents(
                      data.contentfulLandingPage.openingTitle.json
                    )}
                  </h1>
                  {documentToReactComponents(
                    data.contentfulLandingPage.openingSubtitle.json
                  )}
                </div>
                <div className="column col-6"></div>
                <AnchorLink
                  offset="50"
                  href="#list-link"
                  className="btn btn-outline-dark btn-lg s-circle"
                >
                  <i className="icon icon-arrow-down"></i>
                </AnchorLink>
              </div>
            </div>
          </section>
          <section className="hero bg-secondary text-primary">
            <div className="hero-body">
              <div className="columns">
                <div className="column col-6">
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
                <div className="column col-6"></div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )}
  />
);

export default LandingPage;
