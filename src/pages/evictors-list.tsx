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
          dishonorableMentions {
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
              description {
                json
              }
              photo {
                sizes(maxWidth: 613) {
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
              photoCaption
              evictions
              boroUnits
              boroFilings
              boroPercentFiled
              boroPercentRs
              citywideEvictions
              citywideUnits
              citywideFilings
              citywidePercentFiled
              citywidePercentRs
              banks
              lawyers
              organizingCta {
                json
              }
              organizingPhoto1 {
                fluid {
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
              organizingPhotoCaption1
              organizingPhoto2 {
                fluid {
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
              organizingPhotoCaption2
              organizingPhoto3 {
                fluid {
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
              organizingPhotoCaption3
              evictionsMapUrl {
                evictionsMapUrl
              }
              whoOwnsWhatUrl
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <section id="list-intro" className="list-intro hero bg-secondary text-light">
          <div className="hero-body">
            <h1>{data.contentfulListPage.title}</h1>
            <span className="list-subtitle">
              {documentToReactComponents(data.contentfulListPage.subtitle.json)}
            </span>
            <h3> Select a borough: </h3>
            <div className="btn-group">
              {data.contentfulListPage.evictorList.map(list => 
                <AnchorLink 
                  key={list.boroName} 
                  href={"#" + list.boroName} 
                  className="btn btn-lg btn-outline-secondary">
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
        <div className="boro-list">
          <h1 className="text-primary text-bold">Dishonorable Mentions</h1>
          <div className="dishonorable-mentions-text rich-text-bulleted-list">
            {documentToReactComponents(data.contentfulListPage.dishonorableMentions.json)}
          </div>
        </div>
      </Layout>
    )}
  />
)

export default EvictorsListPage
