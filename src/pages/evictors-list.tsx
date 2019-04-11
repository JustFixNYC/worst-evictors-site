import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { StaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from 'gatsby'

import '../styles/evictors-list.scss'

import Layout from '../components/layout'
import Evictor from '../components/evictor'

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
	            <AnchorLink href="#bronx" className="btn btn-lg btn-outline-primary">
	              Bronx
	            </AnchorLink>
	            <AnchorLink href="#manhattan" className="btn btn-lg btn-outline-primary">
	              Manhattan
	            </AnchorLink>
	            <AnchorLink href="#brooklyn" className="btn btn-lg btn-outline-primary">
	              Brooklyn
	            </AnchorLink>
	            <AnchorLink href="#queens" className="btn btn-lg btn-outline-primary">
	              Queens
	            </AnchorLink>
	        </div>
          </div>
        </section>
        <section id="bronx" className="boro-list">
          <h3>{data.contentfulListPage.evictorList[0].boroName}</h3>
          <h5>{documentToReactComponents(data.contentfulListPage.evictorList[0].subtitle.json)}</h5>
          {data.contentfulListPage.evictorList[0].evictors.map(evictor => 
          	<Evictor data={evictor} />)}
        </section>
        <section id="manhattan" className="boro-list">
          <h3>{data.contentfulListPage.evictorList[1].boroName}</h3>
          <h5>{documentToReactComponents(data.contentfulListPage.evictorList[1].subtitle.json)}</h5>
          {data.contentfulListPage.evictorList[1].evictors.map(evictor => 
          	<Evictor data={evictor} />)}
        </section>
        <section id="brooklyn" className="boro-list">
          <h3>{data.contentfulListPage.evictorList[2].boroName}</h3>
          <h5>{documentToReactComponents(data.contentfulListPage.evictorList[2].subtitle.json)}</h5>
          {data.contentfulListPage.evictorList[2].evictors.map(evictor => 
          	<Evictor data={evictor} />)}
        </section>
      </Layout>
    )}
  />
)

export default EvictorsListPage
