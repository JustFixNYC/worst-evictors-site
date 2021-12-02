import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import contentfulOptions from "../../utils/contentful-rich-text-options";

import "../../styles/evictors-list.scss";

const laurel1 = require("../../images/laurel1.png");
const laurel2 = require("../../images/laurel2.png");

import Layout from "../../components/layout";
import Evictor from "../../components/evictor";

const CitywideEvictorsListPage = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulCitywideListPage {
          title
          subtitle {
            json
          }
          evictors {
            boro
            citywideRank
            rankLastYear
            name
            citywideListDescription {
              json
            }
            corporation
            photo {
              sizes(maxWidth: 613) {
                aspectRatio
                src
                srcSet
                sizes
              }
            }
            photoCaption
            citywideEvictions
            citywideUnits
            citywideFilings
            citywidePercentFiled
            citywidePercentRs
            banks
            lawyers
            marshals
            estimatedWorth
            citywideEvictionsMapUrl {
              citywideEvictionsMapUrl
            }
            whoOwnsWhatUrl
          }
          nychaDishonorableMention {
            json
          }
          citywideDishonorableMentions {
            json
          }
        }
      }
    `}
    render={data => (
      <Layout
        customTitle="NYC's Top 20 Worst Evictors in 2019"
        customImage="https://i.imgur.com/NiEQZ6x.png"
        customUrl="https://www.worstevictorsnyc.org/evictors-list/citywide/"
        className="list-page"
      >
        <section
          id="list-intro"
          className="list-hero hero bg-secondary text-light"
        >
          <div className="hero-body">
            <h1>{data.contentfulCitywideListPage.title}</h1>
            <span className="list-subtitle">
              {documentToReactComponents(
                data.contentfulCitywideListPage.subtitle.json,
                contentfulOptions
              )}
            </span>
            <AnchorLink
              offset="50"
              href="#citywide-list"
              className="btn btn-lg btn-outline-secondary citywide-list-anchor"
            >
              View list
            </AnchorLink>
          </div>
        </section>
        <div className="list-content">
          <div className="red-space bg-secondary" />

          <section className="boro-list" id="citywide-list">
            {data.contentfulCitywideListPage.evictors.map((evictor: any) => (
              <Evictor key={evictor.name + "-" + evictor.boro} data={evictor} />
            ))}
          </section>
        </div>
        <section
          id="dishonorable-mentions"
          className="list-hero hero bg-secondary text-light"
        >
          <div className="dishonorable-mentions hero-body">
            <h2 className="text-center text-bold text-uppercase p-sticky">
              Dishonorable Mentions
            </h2>
            <div className="mention-category">
              <div className="laurel container p-relative">
                <img
                  className="laurel-img p-centered"
                  src={laurel2}
                  alt="laurel1"
                />
                <div className="laurel-text text-center p-absolute">
                  PUBLIC HOUSING
                </div>
              </div>
              <span className="text-center">
                {documentToReactComponents(
                  data.contentfulCitywideListPage.nychaDishonorableMention.json
                )}
              </span>
            </div>
            <div className="mention-category">
              <div className="laurel container p-relative">
                <img
                  className="laurel-img p-centered"
                  src={laurel1}
                  alt="laurel2"
                />
                <div className="laurel-text text-center p-absolute">
                  PROPERTY MANAGERS
                </div>
              </div>
              <span className="text-center">
                {documentToReactComponents(
                  data.contentfulCitywideListPage.citywideDishonorableMentions
                    .json
                )}
              </span>
            </div>
          </div>
        </section>
      </Layout>
    )}
  />
);

export default CitywideEvictorsListPage;
