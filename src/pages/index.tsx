import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "gatsby";
import Layout from "../components/layout";
import BackgroundImage from "gatsby-background-image";
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

type ResponsiveImageProps = {
  fluid: any;
  description?: string;
  /**
   * If set to `true`, will only show image on on devices smaller than a desktop.
   * If `false`, will only show on desktop.
   */
  showMobileOnly?: boolean;
};
const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  fluid,
  description,
  showMobileOnly
}) => {
  const visibilityClass = showMobileOnly ? "show-lg" : "hide-lg";
  return (
    <>
      <BackgroundImage
        className={`background-cover-photo ${visibilityClass}`}
        fluid={fluid}
      />
      {description && (
        <span className={`text-assistive ${visibilityClass}`}>
          Image description: {description}
        </span>
      )}
    </>
  );
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
            description
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          kyrTitle
          kyrImage {
            description
            fluid {
              ...GatsbyContentfulFluid
            }
          }
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
                sizes(maxWidth: 250) {
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
            dishonorableMentionImage {
              sizes(maxWidth: 250) {
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
              <div className="column col-4 col-lg-12 sticky-column-desktop full-height-container-desktop">
                <div className="full-height-container-desktop d-flex">
                  <div>
                    <h1 className="immediate-fade-in">
                      {documentToReactComponents(
                        data.contentfulLandingPage.openingTitle.json
                      )}
                    </h1>
                  </div>
                  <div className="subtitle delayed-fade-in">
                    {documentToReactComponents(
                      data.contentfulLandingPage.openingSubtitle.json
                    )}
                  </div>
                </div>
                <div className="delayed-fade-in">
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
                  <br />
                </div>
              </div>
              <div className="column col-8 col-lg-12 evictors">
                <div className="columns">
                  <div
                    key="e-intro"
                    id="evictors"
                    className="column col-3 col-xl-4 col-lg-12 bg-primary text-right fade-in-0"
                  >
                    <span aria-hidden>
                      COVID <br /> Worst <br className="hide-lg" /> Evictors
                    </span>
                    <span className="text-assistive">COVID Worst Evictor</span>
                  </div>
                  {evictors.map((evictor: EvictorDetails, i: number) => (
                    <Link
                      key={`e-${i}`}
                      to={`/list#${evictor.citywideRank}`}
                      className={`column col-3 col-xl-4 col-lg-6 bg-error text-secondary fade-in-${evictor.citywideRank}`}
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
                    to="/list#dm"
                    className="column col-3 col-xl-4 col-lg-6 bg-error text-secondary fade-in-21"
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
              <div className="column col-4 col-lg-12 d-flex">
                <div>
                  <div className="eyebrow">Worst Evictors Map</div>
                  <h1>{data.contentfulLandingPage.mapTitle}</h1>
                </div>
                {data.contentfulLandingPage.mapBackground && (
                  <ResponsiveImage
                    showMobileOnly
                    {...data.contentfulLandingPage.mapBackground}
                  />
                )}
                <div>
                  {documentToReactComponents(
                    data.contentfulLandingPage.mapDescription.json
                  )}

                  <Link to="/map" className="btn btn-secondary">
                    {data.contentfulLandingPage.mapButton}
                  </Link>
                </div>
              </div>
              <div className="column col-8 col-lg-12">
                {data.contentfulLandingPage.mapBackground && (
                  <ResponsiveImage
                    {...data.contentfulLandingPage.mapBackground}
                  />
                )}
              </div>
            </div>

            <div id="rights" className="columns bg-primary text-secondary">
              <div className="column col-4 col-lg-12 sticky-column-desktop full-height-container-desktop d-flex">
                <div>
                  <div className="eyebrow">Know your tenant rights </div>
                  <h1>{data.contentfulLandingPage.kyrTitle}</h1>
                </div>
                {data.contentfulLandingPage.kyrImage && (
                  <ResponsiveImage
                    showMobileOnly
                    {...data.contentfulLandingPage.kyrImage}
                  />
                )}
                <div className="marginless">
                  {documentToReactComponents(
                    data.contentfulLandingPage.kyrDescription.json
                  )}
                </div>
              </div>
              <div className="column col-8 col-lg-12">
                {data.contentfulLandingPage.kyrImage && (
                  <ResponsiveImage {...data.contentfulLandingPage.kyrImage} />
                )}
              </div>
              <div className="column col-4 col-lg-12"></div>
              <div className="column col-8 col-lg-12">
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
