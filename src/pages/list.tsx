import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import contentfulOptions from "../utils/contentful-rich-text-options";

import "../styles/evictors-list.scss";

import Layout from "../components/layout";

type EvictorProps = {
  content: any;
};

const EvictorProfile: React.FC<EvictorProps> = ({ content }) => (
  <section
    className="bg-primary evictor-profile"
    key={content.rank}
    id={content.rank}
  >
    <div className="columns text-secondary">
      <div className="column col-4">
        <div className="eyebrow rank">{content.citywideRank}.</div>
        {content.rankLastYear && (
          <div className="eyebrow">Last Year: {content.rankLastYear}</div>
        )}
        <br />
        <span className="text-bold">
          <h1>{content.name}</h1>
          <h2>{content.corporation}</h2>
          <br />
          <br />
          <h2>{content.citywideEvictions} households sued for eviction</h2>
        </span>
        <p>{content.pastExecutedEvictions} evictions executed since 2017</p>
        <p>{content.citywideUnits} families housed</p>
        <p>{content.citywidePercentRs}% rent stabilized</p>
        <p>{content.estimatedWorth} paid for buildings</p>
      </div>
      <div className="column col-8 bg-error">
        <div
          className="background-cover-photo"
          style={
            content.photo && {
              backgroundImage: `url(${content.photo.sizes.src})`
            }
          }
        />
      </div>
    </div>
  </section>
);

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
            pastExecutedEvictions
            citywideUnits
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
          customTitle="NYC's Top 20 Worst Evictors during COVID-19"
          customImage="https://i.imgur.com/NiEQZ6x.png"
          customUrl="https://www.worstevictorsnyc.org/evictors-list/citywide/"
          className="list-page"
        >
          <div className="list-page">
            <section className="bg-primary">
              <div className="columns text-secondary">
                <div className="column col-4">
                  <h1>{data.contentfulCitywideListPage.title}</h1>
                </div>
                <div className="column col-8"></div>
              </div>
            </section>
            {evictorsContentList.map((content: any) => (
              <EvictorProfile content={content} />
            ))}
          </div>
        </Layout>
      );
    }}
  />
);

export default CitywideEvictorsListPage;
