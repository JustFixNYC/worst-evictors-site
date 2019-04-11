import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { StaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from 'gatsby'

import '../styles/evictors-list.scss'

import Layout from '../components/layout'
import BoroList from '../components/boro-list'

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
              {data.contentfulListPage.evictorList.map(list => 
                <AnchorLink 
                  key={list.boroName} 
                  href={"#" + list.boroName} 
                  className="btn btn-lg btn-outline-primary">
                    {list.boroName}
                </AnchorLink>
              )}
	        </div>
          </div>
        </section> 
        {data.contentfulListPage.evictorList.map(list => 
          <BoroList 
            key={list.boroName} 
            data={list} />
        )}
      </Layout>
    )}
  />
)

export default EvictorsListPage
