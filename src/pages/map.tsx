import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import "../styles/map.scss";

import Layout from "../components/layout";
import contentfulOptions from "../utils/contentful-rich-text-options";
import { OutboundLink } from "../components/outbound-link";

const CITYWIDE_MAP_URL =
  "https://ampitup.carto.com/builder/22338af2-9fab-4e3b-89aa-2fcb1b509f9e/embed";

const EVICTION_CRISIS_MONITOR_URL =
  "https://www.righttocounselnyc.org/evictioncrisismonitor";

const MapPage: React.FC<{ location: any }> = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        contentfulMapPage {
          title
          description {
            json
          }
          descriptionFooter {
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

      const { title, description, descriptionFooter } = data.contentfulMapPage;

      return (
        <Layout
          customTitle="Interactive Map | NYC's Worst COVID Evictors"
          customDescription="We mapped how these pending evictions relate to COVID-19 case rates, race, income and other factors inextricable from the eviction crisis."
          customImage="https://i.imgur.com/21ukLGA.png"
          customUrl="https://www.worstevictorsnyc.org/map/"
          hideScrollArrow
        >
          <div className="map-title-banner text-primary">
            <h4 className="p-2 mx-2">
              <span className="mr-2 map-buttons-leadin hide-lg">
                Eviction lawsuits from March 2020 to September 2021
              </span>
              <span className="map-buttons-leadin show-lg">
                Eviction cases during COVID
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
          <div className="columns bg-primary text-secondary" id="map-context">
            <div className="column col-4 col-lg-12 bg-primary sticky-column">
              <br />
              <div className="eyebrow">Worst Evictors Map</div>
              <br />
              <h1 className="m0">{title}</h1>
            </div>
            <div className="column col-8 hide-lg bg-primary" />
            <div className="column col-4 col-lg-12" />
            <div className="column col-8 col-lg-12">
              <div className="rich-text-bulleted-list">
                {documentToReactComponents(description.json, contentfulOptions)}
                <OutboundLink
                  href={EVICTION_CRISIS_MONITOR_URL}
                  className="btn btn-primary"
                >
                  Learn more on the Eviction Crisis Monitor
                </OutboundLink>
              </div>
              <br />
              <div className="divider" />
              <div>
                {documentToReactComponents(
                  descriptionFooter.json,
                  contentfulOptions
                )}
              </div>
            </div>
          </div>
        </Layout>
      );
    }}
  />
);

export default MapPage;
