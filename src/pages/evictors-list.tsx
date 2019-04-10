import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { StaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from 'gatsby'

import '../styles/evictors-list.scss'

import Layout from '../components/layout'

const EvictorsListPage = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulListPage {
          title
          subtitle {
            json
          }
          evictorList {
            boroName 
            subtitle {
              json
            }       
            evictors {
              boro
              rank
              name
              corporation
              evictions
              description {
                json
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <section id="list-intro" className="list-intro hero bg-primary">
          <div className="hero-body">
            <h1>{data.contentfulListPage.title}</h1>
            {documentToReactComponents(data.contentfulListPage.subtitle.json)}
            <h3> Select a borough: </h3>
            <div className="btn-group">
	            <AnchorLink href="#bronx" className="btn btn-lg">
	              Bronx <i className="icon icon-forward"></i>
	            </AnchorLink>
	            <AnchorLink href="#manhattan" className="btn btn-lg">
	              Manhattan<i className="icon icon-forward"></i>
	            </AnchorLink>
	            <AnchorLink href="#brooklyn" className="btn btn-lg">
	              Brooklyn<i className="icon icon-forward"></i>
	            </AnchorLink>
	            <AnchorLink href="#queens" className="btn btn-lg">
	              Queens<i className="icon icon-forward"></i>
	            </AnchorLink>
	        </div>
          </div>
        </section>
      </Layout>
    )}
  />
)

export default EvictorsListPage
