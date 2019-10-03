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
          dishonorableMentions {
            landlordsOnMultipleLists {
              json
            }
            landlordsWhoSueEveryone {
              json
            }
            landlordsWhoSueAlmostEveryone {
              json
            }
            notableMentions {
              json
            }
          }
        }
      }
    `}
    render={data => (
      <Layout className="list-page">
        <section id="list-intro" className="list-hero hero bg-secondary text-light">
          <div className="hero-body">
            <h1>{data.contentfulListPage.title}</h1>
            <span className="list-subtitle">
              {documentToReactComponents(data.contentfulListPage.subtitle.json, contentfulOptions)}
            </span>
            <h3> Select a borough: </h3>
          </div>
        </section>
        <div className="list-content">
          <div className="boro-list-selector hero bg-secondary text-light">
            <div className="hero-body">
              <div>
                <div className="btn-group show-md">
                  {data.contentfulListPage.evictorList.map(list => 
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
                  {data.contentfulListPage.evictorList.map(list => 
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
          </div>

          <div className="red-space bg-secondary" />

          {data.contentfulListPage.evictorList.map(list => 
          <BoroList 
            key={list.boroName} 
            data={list} />
          )}
          
        </div>
        <section id="dishonorable-mentions" className="list-hero hero bg-secondary text-light">
          <div className="dishonorable-mentions hero-body">
            <h2 className="text-center text-bold text-uppercase p-sticky">Dishonorable Mentions</h2>
            <div className="mention-category">
              <div className="laurel container p-relative">
                <img className="laurel-img p-centered" src={laurel1} alt="laurel1"/>
                <div className="laurel-text text-center p-absolute">ON MULTIPLE BOROUGH LISTS</div>
              </div>
              <span className="text-center">
                {documentToReactComponents(data.contentfulListPage.dishonorableMentions.landlordsOnMultipleLists.json)}
              </span>
            </div>
            <div className="mention-category">
              <div className="laurel container p-relative">
                <img className="laurel-img p-centered" src={laurel2} alt="laurel2"/>
                <div className="laurel-text text-center p-absolute">SUES PEOPLE MORE THAN ONCE</div>
              </div>
               <span className="text-center">
                {documentToReactComponents(data.contentfulListPage.dishonorableMentions.landlordsWhoSueEveryone.json)}
              </span>
            </div>
            <div className="mention-category">
              <div className="laurel container p-relative">
                <img className="laurel-img p-centered" src={laurel4} alt="laurel4"/>
                <div className="laurel-text text-center p-absolute">SUES A LOT</div>
              </div>
               <span className="text-center">
                {documentToReactComponents(data.contentfulListPage.dishonorableMentions.landlordsWhoSueAlmostEveryone.json)}
              </span>
            </div>
          </div>
        </section> 
      </Layout>
    )}
  />
)

export default EvictorsListPage
