import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from 'gatsby'

import "spectre.css"

import Layout from '../components/layout'

// Other images to include: mapBackground

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
    `}
    render={data => (
      <Layout>
        <h1>Hello!</h1>
        <p>Welcome to your new Gatsby site!</p>
        <p>Now go build something great.</p>
        <p>{documentToReactComponents(data.contentfulLandingPage.openingTitle.json)}</p>
        <Link to="/evictors-list/" className="btn primary">Go to page 2</Link>
      </Layout>
    )}
  />
)

export default LandingPage
