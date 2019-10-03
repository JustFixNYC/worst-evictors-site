import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { StaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import contentfulOptions from '../../utils/contentful-rich-text-options'
import { Link } from 'gatsby'

import '../../styles/evictors-list.scss'

import laurel1 from '../../images/laurel1.png'
import laurel2 from '../../images/laurel2.png'
import laurel3 from '../../images/laurel3.png'
import laurel4 from '../../images/laurel4.png'

import Layout from '../../components/layout'
import BoroList from '../../components/boro-list'
import Evictor from '../../components/evictor'

const EvictorsListPage = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulCitywideListPage {
          title
          subtitle {
            json
          }
          evictors {
            boro
            citywideRank
            name
      			citywideListDescription {
              json
            }
            corporation
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
            citywideEvictions
            citywideUnits
            citywideFilings
            citywidePercentFiled
            citywidePercentRs
            banks
            lawyers
            citywideEvictionsMapUrl {
              citywideEvictionsMapUrl
            }
            whoOwnsWhatUrl
          }
          citywideDishonorableMentions {
            json
          }
        }
      }
    `}
    render={data => (
      <Layout className="list-page">
        <section id="list-intro" className="list-hero hero bg-secondary text-light">
          <div className="hero-body">
            <h1>{data.contentfulCitywideListPage.title}</h1>
            <span className="list-subtitle">
              {documentToReactComponents(data.contentfulCitywideListPage.subtitle.json, contentfulOptions)}
            </span>
            <h3> Select a borough: </h3>
          </div>
        </section>
        <div className="list-content">
          {/* <div className="boro-list-selector hero bg-secondary text-light">
            <div className="hero-body">
              <div>
                <div className="btn-group show-md">
                  {data.contentfulCitywideListPage.evictorList.map(list => 
                    <AnchorLink 
                      offset='50'
                      key={list.boroName} 
                      href={"#" + list.boroName} 
                      className="btn btn-lg btn-outline-secondary">
                        {list.boroName}
                    </AnchorLink>
                  )}
                </div>
                <div className="btn-group hide-md">
                  {data.contentfulCitywideListPage.evictorList.map(list => 
                    <AnchorLink 
                      offset='120'
                      key={list.boroName} 
                      href={"#" + list.boroName} 
                      className="btn btn-lg btn-outline-secondary">
                        {list.boroName}
                    </AnchorLink>
                  )}
                </div>
              </div>
            </div>
          </div> */}

          <div className="red-space bg-secondary" />

          <section className="boro-list">
            {data.contentfulCitywideListPage.evictors.map(evictor => 
              <Evictor 
              key={evictor.name + '-' + evictor.boro} 
              data={evictor} 
              isCitywideEvictor={true}/>
            )}
          </section>
          
          
        </div>
        <section id="dishonorable-mentions" className="list-hero hero bg-secondary text-light">
          <div className="dishonorable-mentions hero-body">
            <h2 className="text-center text-bold text-uppercase p-sticky">Dishonorable Mentions</h2>
            <div className="mention-category">
              <div className="laurel container p-relative">
                <img className="laurel-img p-centered" src={laurel1} alt="laurel1"/>
              </div>
              <span className="text-center">
                {documentToReactComponents(data.contentfulCitywideListPage.citywideDishonorableMentions.json)}
              </span>
            </div>
          </div>
        </section> 
      </Layout>
    )}
  />
)

export default EvictorsListPage
