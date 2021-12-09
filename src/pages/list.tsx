import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

import "../styles/evictors-list.scss";

import Layout from "../components/layout";
import EvictorProfile from "../components/evictor";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import contentfulOptions from "../utils/contentful-rich-text-options";

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
              sizes(maxWidth: 1000) {
                aspectRatio
                src
                srcSet
                sizes
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
            sizes(maxWidth: 1000) {
              aspectRatio
              src
              srcSet
              sizes
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
    render={(data) => {
      const evictorsContentList = data.contentfulCitywideListPage.evictors;
      return (
        <Layout
          customTitle="NYC's Top 20 Worst Evictors during COVID-19"
          customImage="https://i.imgur.com/NiEQZ6x.png"
          customUrl="https://www.worstevictorsnyc.org/evictors-list/citywide/"
          className="list-page"
        >
          <div className="list-page">
            <section className="bg-primary">
              <div className="columns text-secondary">
                <div className="column col-4 col-xl-6 col-md-12">
                  <h1>{data.contentfulCitywideListPage.title}</h1>
                </div>
                <div className="column col-8 col-xl-6 col-md-12"></div>
              </div>
            </section>
            {evictorsContentList.map((content: any) => (
              <EvictorProfile content={content} />
            ))}
            <section className="bg-primary evictor-profile" id="dm">
              <div className="columns text-secondary">
                <div className="column col-4 col-xl-6 col-md-12 sticky-column-full-height">
                  <div className="eyebrow">Dishonorable Mention</div>
                  <br />
                  <h2 className="text-bold">Property Management Companies</h2>
                </div>
                <div className="column col-8 col-xl-6 col-md-12">
                  <div
                    className="background-cover-photo"
                    style={
                      data.contentfulCitywideListPage
                        .dishonorableMentionImage && {
                        backgroundImage: `url(${data.contentfulCitywideListPage.dishonorableMentionImage.sizes.src})`,
                      }
                    }
                  />
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
