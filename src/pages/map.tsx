import React from 'react'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { StaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from 'gatsby'

import '../styles/map.scss'

import Layout from '../components/layout'

const CITYWIDE_MAP_URL = 'https://ampitup.carto.com/builder/bc1cb25d-0d57-4735-bcf0-9fd134668f47/embed'

const MapPage = ({ data, location }) => (
<StaticQuery
	    query={graphql`
	      query {
			  contentfulMapPage {
			    title
			    subtitle {
			      json
			    }
			    description {
			      json
			    }
			  }
			}
	    `}
	    render={data => {
			const mapLoading = function() {
				const loadingFrame = document.getElementById("map-iframe");
				loadingFrame.className = "map-container d-invisible";
				const loadingElem = document.getElementById("map-iframe-loading");
				loadingElem.className = "loading loading-lg";
			}
			const mapLoaded = function() {
				const loadingElem = document.getElementById("map-iframe-loading");
				loadingElem.className = "";
				const loadingFrame = document.getElementById("map-iframe");
				loadingFrame.className = "map-container d-block";
			}
			return (<Layout
				customTitle="Interactive Map of Evictions Across NYC in 2019" 
				customImage="https://i.imgur.com/21ukLGA.png"
				customUrl="https://www.worstevictorsnyc.org/map/"
			>
		  	<div className="map-title-banner">
		  		<h4 className="p-2 mx-2">
		  			<span className="mr-2 map-buttons-leadin">2019 Evictions in NYC</span> 
		  		</h4>
		  	</div>
			<div id="map-iframe-loading" className="loading loading-lg">
			<iframe id="map-iframe" className="map-container d-invisible" onLoad={()=>mapLoaded()}
			  	frameBorder="0" src={ (location && location.state && location.state.iframe ? location.state.iframe : CITYWIDE_MAP_URL)}>
			</iframe>
			</div>
			<div className="map-bottom-banner">
				<AnchorLink href="#map-context" className="btn btn-link p-centered text-dark">
		          About this map <i className="icon icon-arrow-down"></i>
		        </AnchorLink>
			</div>
			<section id="map-context" className="map-context landing-context hero">
		      <div className="hero-body">
		        {documentToReactComponents(data.contentfulMapPage.description.json)}
		      </div>
		    </section>
		  </Layout>)}
		}
    />
)

export default MapPage
