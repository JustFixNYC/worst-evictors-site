import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { StaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from 'gatsby'

import '../styles/index.scss'

import efnycIcon from '../images/efnyc-icon.svg'

import Layout from '../components/layout'

// Other images to include: mapBackground

const LandingPage = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulLandingPage {
          tribunalBanner {
            bannerText {
              json
            }
            bannerTextOnMobile {
              json
            }
            bannerButtonUrl
            bannerButtonText
          }
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
          listButton
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
        <section id="intro" className="landing-intro hero hero-centered hero-lg" 
          style={{
            backgroundImage: "url("+(data.contentfulLandingPage.openingBackground ? data.contentfulLandingPage.openingBackground.fluid.src : '')+")",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat:"no-repeat" 
          }}>
          <div className="tile tribunal-banner p-absolute text-center bg-secondary">
            <div className="tile-content text-center m-2 p-2 flex-centered">
              <span className="text-large hide-sm mr-2">{documentToReactComponents(data.contentfulLandingPage.tribunalBanner.bannerText.json)}</span>
              <span className="show-sm text-italic">{documentToReactComponents(data.contentfulLandingPage.tribunalBanner.bannerTextOnMobile.json)}</span>
              <a className="btn btn-primary ml-2"
                href={data.contentfulLandingPage.tribunalBanner.bannerButtonUrl}
                target="_blank" rel="noopener noreferrer">{data.contentfulLandingPage.tribunalBanner.bannerButtonText}</a>
            </div>
          </div>
          <div className="hero-body">
            <h1 className="title-font">{documentToReactComponents(data.contentfulLandingPage.openingTitle.json)}</h1>
            {documentToReactComponents(data.contentfulLandingPage.openingSubtitle.json)}
            <AnchorLink offset='50' href="#list-link" className="btn btn-outline-dark btn-lg s-circle">
              <i className="icon icon-arrow-down"></i>
            </AnchorLink>
          </div>
        </section>
        <section id="list-link" className="list-link hero hero-centered half-vh text-light"
          style={{
            backgroundImage: "url("+(data.contentfulLandingPage.listBackground ? data.contentfulLandingPage.listBackground.fluid.src : '')+")",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat:"no-repeat" 
          }}>
          <div className="hero-body">
            <h1>{data.contentfulLandingPage.listTitle}</h1>
            {documentToReactComponents(data.contentfulLandingPage.listDescription.json)}
            <Link to="/evictors-list/rtc" className="btn btn-outline-secondary">
              {data.contentfulLandingPage.listButton}
              <i className="icon icon-forward ml-2"></i>
            </Link>
          </div>
        </section>
        <section id="map-link" className="map-link hero hero-centered half-vh text-light"
          style={{
            backgroundImage: "url("+(data.contentfulLandingPage.mapBackground ? data.contentfulLandingPage.mapBackground.fluid.src : '')+")",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat:"no-repeat" 
          }}>
          <div className="hero-body">
            <h1>{data.contentfulLandingPage.mapTitle}</h1>
            {documentToReactComponents(data.contentfulLandingPage.mapDescription.json)}
            <Link to="/map" className="btn btn-outline-primary">
              {data.contentfulLandingPage.mapButton}
              <i className="icon icon-forward ml-2"></i>
            </Link>
          </div>
        </section>
        <section id="context" className="landing-context hero">
          <div className="hero-body">
            <h3>{data.contentfulLandingPage.contextTitle}</h3>
            <div className="divider d-invisible"></div>
            {documentToReactComponents(data.contentfulLandingPage.contextDescription.json)}
          </div>
        </section>
        <section id="resources" className="landing-resources container">
          <div className="columns">
            <div id="efnyc" className="efnyc column col-6 col-sm-12 hero hero-sm text-light">
              <div className="hero-body">
                <h3>{data.contentfulLandingPage.efnycTitle}<img className="icon icon-3x mx-1 pb-2" src={efnycIcon} /></h3>
                {documentToReactComponents(data.contentfulLandingPage.efnycDescription.json)}
                <a href="https://www.evictionfreenyc.org/" className="btn btn-outline-efnyc">
                  {data.contentfulLandingPage.efnycButton}
                  <i className="icon icon-forward ml-2"></i>
                </a>
              </div>
            </div>
            <div id="know-your-rights" className="know-your-rights column col-6 col-sm-12 hero hero-sm bg-gray">
              <div className="hero-body">
                <h3>{data.contentfulLandingPage.kyrTitle}</h3>
                {documentToReactComponents(data.contentfulLandingPage.kyrDescription.json)}
                <Link to="/rights">
                  <button className="btn btn-outline-dark">
                    {data.contentfulLandingPage.kyrButton}
                    <i className="icon icon-forward ml-2"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )}
  />
)

export default LandingPage
