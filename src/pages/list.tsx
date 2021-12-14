import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import BackgroundImage from "gatsby-background-image";
import EvictorProfile from "../components/evictor";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import contentfulOptions from "../utils/contentful-rich-text-options";

import "../styles/evictors-list.scss";

const CitywideEvictorsListPage = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulCitywideListPage {
          title
          evictors {
            citywideRank
            rankLastYear
            name
            corporation
            primaryBusinessAddress
            photo {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            photoCaption
            citywideEvictions
            pastExecutedEvictions
            citywideUnits
            citywidePercentRs
            banks
            lawyers
            subsidies
            publicFundingType
            estimatedWorth
            citywideEvictionsMapUrl {
              citywideEvictionsMapUrl
            }
            whoOwnsWhatUrl
            citywideListDescription {
              json
            }
          }
          dishonorableMentionImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          dishonorableMentionImageCaption {
            json
          }
          citywideDishonorableMentions {
            json
          }
        }
      }
    `}
    render={data => {
      const evictorsContentList = data.contentfulCitywideListPage.evictors;
      return (
        <Layout
          customTitle="Top 20 List | NYC's Worst COVID Evictors"
          customDescription={data.contentfulCitywideListPage.title}
          customUrl="https://www.worstevictorsnyc.org/list"
          className="list-page"
        >
          <div className="list-page">
            <section className="bg-primary">
              <div className="columns text-secondary">
                <div className="column col-4 col-xl-6 col-lg-12">
                  <h1>{data.contentfulCitywideListPage.title}</h1>
                </div>
                <div className="column col-8 col-xl-6 col-lg-12"></div>
              </div>
            </section>
            {evictorsContentList.map((content: any, i: number) => (
              <EvictorProfile content={content} key={i} />
            ))}
            <section className="bg-primary evictor-profile" id="dm">
              <div className="columns text-secondary">
                <div className="column col-4 col-xl-6 col-lg-12 sticky-column-desktop full-height-container">
                  <div className="eyebrow">Dishonorable Mention</div>
                  <br />
                  <h2 className="text-bold">Property Management Companies</h2>
                </div>
                <div className="column col-8 col-xl-6 col-lg-12">
                  <BackgroundImage
                    className="background-cover-photo"
                    fluid={
                      data.contentfulCitywideListPage.dishonorableMentionImage
                        .fluid
                    }
                  />
                  <div className="eyebrow text-right">
                    {documentToReactComponents(
                      data.contentfulCitywideListPage
                        .dishonorableMentionImageCaption.json,
                      contentfulOptions
                    )}
                  </div>
                  <br />
                  {documentToReactComponents(
                    data.contentfulCitywideListPage.citywideDishonorableMentions
                      .json,
                    contentfulOptions
                  )}
                  <br />
                  <Link to="/" className="btn btn-primary">
                    Back to worst evictors list
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </Layout>
      );
    }}
  />
);

export default CitywideEvictorsListPage;
