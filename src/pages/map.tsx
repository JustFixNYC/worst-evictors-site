import React from 'react'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { StaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from 'gatsby'

import '../styles/map.scss'

import Layout from '../components/layout'

const CITYWIDE_MAP_URL = 'https://ampitup.carto.com/builder/4eea8576-9c57-4cf5-a1cf-55ea44bce496/embed'
const RTC_ZIPS_MAP_URL = 'https://ampitup.carto.com/builder/324065d6-b916-4d9b-ba09-5dbc44a818db/embed'

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
			return (<Layout>
		  	<div className="map-title-banner">
		  		<h4 className="p-2 mx-2">
		  			<span className="mr-2 map-buttons-leadin">2018 Evictions in:</span> 
		  				<br className="show-sm" />
			  		<div className="btn-group">
			  			<Link to="/map" className={"btn btn-" + (location && (!location.state || !location.state.iframe || (location.state.iframe == CITYWIDE_MAP_URL)) ? "primary" : "default") }
							onClick={()=>mapLoading()}
			  			state={{ iframe: CITYWIDE_MAP_URL }}>
				  			All NYC
				  		</Link>
				  		<Link to="/map" className={"btn  btn-" + (location && location.state && location.state.iframe && location.state.iframe !== CITYWIDE_MAP_URL ? "primary" : "default") }
							onClick={()=>mapLoading()}
			  			state={{ iframe: RTC_ZIPS_MAP_URL }}>
				  			RTC-Eligible Zipcodes
				  		</Link>
				  	</div>
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
