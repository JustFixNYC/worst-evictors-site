import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { StaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from 'gatsby'

import '../styles/index.scss'

import Layout from '../components/layout'

// Other images to include: mapBackground

const LandingPage = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulLandingPage {
          edges {
            node {
              openingTitle {
                json
              }
              openingSubtitle {
                json
              }
              openingBackground {
                sizes(maxWidth: 613) {
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
              mapTitle
              mapDescription {
                json
              }
              mapButton
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
        }
      }
    `}
    render={data => (
      <Layout>
        <section id="intro" className="hero hero-lg bg-primary">
          <div className="hero-body">
            <h1>{documentToReactComponents(data.allContentfulLandingPage.edges[0].node.openingTitle.json)}</h1>
            {documentToReactComponents(data.allContentfulLandingPage.edges[0].node.openingSubtitle.json)}
            <AnchorLink href="#list-link" className="btn btn-action btn-lg s-circle">
              <i className="icon icon-2x icon-arrow-down"></i>
            </AnchorLink>
          </div>
        </section>
        <section id="list-link" className="hero half-vh">
          <div className="hero-body">
            <h1>{data.allContentfulLandingPage.edges[0].node.listTitle}</h1>
            {documentToReactComponents(data.allContentfulLandingPage.edges[0].node.listDescription.json)}
            <Link to="/evictors-list" className="btn btn-primary">
              {data.allContentfulLandingPage.edges[0].node.listButton}
              <i className="icon icon-forward ml-2"></i>
            </Link>
          </div>
        </section>
        <section id="map-link" className="hero half-vh">
          <div className="hero-body">
            <h1>{data.allContentfulLandingPage.edges[0].node.mapTitle}</h1>
            {documentToReactComponents(data.allContentfulLandingPage.edges[0].node.mapDescription.json)}
            <Link to="/map" className="btn btn-primary">
              {data.allContentfulLandingPage.edges[0].node.mapButton}
              <i className="icon icon-forward ml-2"></i>
            </Link>
          </div>
        </section>
        <section id="context" className="hero">
          <div className="hero-body">
            <h3>{data.allContentfulLandingPage.edges[0].node.contextTitle}</h3>
            <div className="divider d-invisible"></div>
            {documentToReactComponents(data.allContentfulLandingPage.edges[0].node.contextDescription.json)}
          </div>
        </section>
        <section id="resources" className="container">
          <div className="columns">
            <div id="efnyc" className="column col-6 col-sm-12 hero hero-sm">
              <div className="hero-body">
                <h3>{data.allContentfulLandingPage.edges[0].node.efnycTitle}</h3>
                {documentToReactComponents(data.allContentfulLandingPage.edges[0].node.efnycDescription.json)}
                <a href="https://www.evictionfreenyc.org/" className="btn btn-primary">
                  {data.allContentfulLandingPage.edges[0].node.efnycButton}
                  <i className="icon icon-forward ml-2"></i>
                </a>
              </div>
            </div>
            <div id="know-your-rights" className="column col-6 col-sm-12 hero hero-sm">
              <div className="hero-body">
                <h3>{data.allContentfulLandingPage.edges[0].node.kyrTitle}</h3>
                {documentToReactComponents(data.allContentfulLandingPage.edges[0].node.kyrDescription.json)}
                <Link to="/rights" className="btn btn-primary">
                  {data.allContentfulLandingPage.edges[0].node.kyrButton}
                  <i className="icon icon-forward ml-2"></i>
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
