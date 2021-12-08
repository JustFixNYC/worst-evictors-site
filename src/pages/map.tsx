import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import "../styles/map.scss";

import Layout from "../components/layout";
import contentfulOptions from "../utils/contentful-rich-text-options";

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

      const { title, description } = data.contentfulMapPage;

      return (
        <Layout
          customTitle="Interactive Map of Evictions Across NYC during COVID-19"
          customImage="https://i.imgur.com/21ukLGA.png"
          customUrl="https://www.worstevictorsnyc.org/map/"
        >
          <div className="map-title-banner text-primary">
            <h4 className="p-2 mx-2">
              <span className="mr-2 map-buttons-leadin hide-md">
                Eviction lawsuits from March 2020 to September 2021
              </span>
              <span className="map-buttons-leadin show-md">
                Eviction cases during COVID
              </span>
            </h4>
          </div>
          <div
            id="map-iframe-loading bg-secondary"
            className="loading loading-lg"
          >
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
          <div className="columns bg-primary text-secondary" id="map-context">
            <div className="column col-4 col-md-12 bg-primary sticky-header-column">
              <br />
              <div className="eyebrow">Worst Evictors Map</div>
              <br />
              <h1 className="m0">{title}</h1>
            </div>
            <div className="column col-8 hide-md bg-primary" />
            <div className="column col-4 col-md-12" />
            <div className="column col-8 col-md-12">
              <div className="rich-text-bulleted-list">
                {documentToReactComponents(description.json, contentfulOptions)}
              </div>
            </div>
          </div>
        </Layout>
      );
    }}
  />
);

export default MapPage;
