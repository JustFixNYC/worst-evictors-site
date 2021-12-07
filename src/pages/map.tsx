import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import "../styles/map.scss";

import Layout from "../components/layout";

const CITYWIDE_MAP_URL =
  "https://ampitup.carto.com/builder/740ca688-2c74-4f0f-8aea-90d527dc6cdc/embed";

const MapPage: React.FC<{ location: any }> = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        contentfulMapPage {
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
    render={data => {
      const mapLoaded = function() {
        const loadingElem = document.getElementById("map-iframe-loading");
        if (!!loadingElem) loadingElem.className = "";
        const loadingFrame = document.getElementById("map-iframe");
        if (!!loadingFrame) loadingFrame.className = "map-container d-block";
      };
      return (
        <Layout
          customTitle="Interactive Map of Evictions Across NYC in 2019"
          customImage="https://i.imgur.com/21ukLGA.png"
          customUrl="https://www.worstevictorsnyc.org/map/"
        >
          <div className="map-title-banner">
            <h4 className="p-2 mx-2">
              <span className="mr-2 map-buttons-leadin">
                Eviction Lawsuits from March 2020 to September 2021
              </span>
            </h4>
          </div>
          <div id="map-iframe-loading" className="loading loading-lg">
            <iframe
              id="map-iframe"
              className="map-container d-invisible"
              onLoad={() => mapLoaded()}
              frameBorder="0"
              src={
                location && location.state && location.state.iframe
                  ? location.state.iframe
                  : CITYWIDE_MAP_URL
              }
            ></iframe>
          </div>
          <div className="map-bottom-banner">
            <AnchorLink
              href="#map-context"
              className="btn btn-link p-centered text-dark"
            >
              About this map <i className="icon icon-arrow-down"></i>
            </AnchorLink>
          </div>
          <section
            id="map-context"
            className="map-context landing-context hero"
          >
            <div className="hero-body">
              {documentToReactComponents(
                data.contentfulMapPage.description.json
              )}
            </div>
          </section>
        </Layout>
      );
    }}
  />
);

export default MapPage;
