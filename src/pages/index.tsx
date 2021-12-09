import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "gatsby";
import Layout from "../components/layout";
import contentfulOptions from "../utils/contentful-rich-text-options";

import "../styles/index.scss";

const rtcLogo = require("../images/RTC_logo.png");
const justfixLogo = require("../images/JustFix_logo.png");
const aempLogo = require("../images/AEMP_logo.png");

type EvictorDetails = {
  citywideRank: number;
  name: string;
  photo: any;
};

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
          evictorsList {
            evictors {
              citywideRank
              name
              photo {
                sizes(maxWidth: 300) {
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
            dishonorableMentionImage {
              sizes(maxWidth: 300) {
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    `}
    render={data => {
      const {
        evictors,
        dishonorableMentionImage
      } = data.contentfulLandingPage.evictorsList;

      return (
        <Layout>
          <div className="homepage">
            <div className="columns bg-primary text-secondary">
              <div className="column col-4 col-md-12 sticky-column-full-height">
                <h1>
                  {documentToReactComponents(
                    data.contentfulLandingPage.openingTitle.json
                  )}
                </h1>
                {documentToReactComponents(
                  data.contentfulLandingPage.openingSubtitle.json
                )}
                <br />
                <div className="eyebrow">Brought to you by</div>
                <img
                  className="logo"
                  src={rtcLogo}
                  alt="Right to Counsel NYC Coalition"
                />
                <img className="logo" src={justfixLogo} alt="JustFix NYC" />
                <img
                  className="logo"
                  src={aempLogo}
                  alt="The Anti-Eviction Mapping Project"
                />
              </div>
              <div className="column col-8 col-md-12 evictors">
                <div className="columns">
                  <div
                    key="e-intro"
                    className="column col-3 col-xl-4 col-md-12 bg-primary text-right"
                  >
                    <span>
                      COVID <br /> Worst <br className="hide-md" /> Evictors
                    </span>
                  </div>
                  {evictors.map((evictor: EvictorDetails, i: number) => (
                    <Link
                      key={`e-${i}`}
                      to={`/list/#${evictor.citywideRank}`}
                      className="column col-3 col-xl-4 col-md-6 bg-error"
                    >
                      <>
                        <div className="container">
                          <div
                            className="evictor-icon background-cover-photo"
                            style={
                              evictor.photo && {
                                backgroundImage: `url(${evictor.photo.sizes.src})`
                              }
                            }
                          />
                          <div className="eyebrow">{evictor.citywideRank}</div>
                        </div>
                        <div className="hover-label text-right">
                          {evictor.name}
                        </div>
                      </>
                    </Link>
                  ))}
                  <Link
                    key={`e-dishonor`}
                    to="/list/#dm"
                    className="column col-3 col-xl-4 col-md-6 bg-error"
                  >
                    <>
                      <div className="container">
                        <div
                          className="evictor-icon background-cover-photo"
                          style={
                            dishonorableMentionImage && {
                              backgroundImage: `url(${dishonorableMentionImage.sizes.src})`
                            }
                          }
                        />
                        <div className="eyebrow">*</div>
                      </div>
                      <div className="hover-label text-right">
                        Dishonorable Mentions
                      </div>
                    </>
                  </Link>
                </div>
              </div>
            </div>
            <div className="columns bg-secondary text-primary">
              <div className="column col-4 col-md-12">
                <div className="eyebrow">Worst Evictors Map</div>
                <h1>{data.contentfulLandingPage.mapTitle}</h1>
                {documentToReactComponents(
                  data.contentfulLandingPage.mapDescription.json
                )}
                <Link to="/map" className="btn btn-secondary">
                  {data.contentfulLandingPage.mapButton}
                </Link>
              </div>
              <div className="column col-8 col-md-12"></div>
            </div>

            <div id="rights" className="columns bg-primary text-secondary">
              <div className="column col-4 col-md-12 sticky-column-full-height">
                <div className="eyebrow">know your tenant rights </div>
                <h1>{data.contentfulLandingPage.kyrTitle}</h1>
                {documentToReactComponents(
                  data.contentfulLandingPage.kyrDescription.json
                )}
              </div>
              <div className="column col-8 col-md-12"></div>
              <div className="column col-4 col-md-12"></div>
              <div className="column col-8 col-md-12">
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
      );
    }}
  />
);

export default LandingPage;
