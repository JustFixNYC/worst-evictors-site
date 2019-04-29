import React from 'react'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { StaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from 'gatsby'

import '../styles/map.scss'

import Layout from '../components/layout'

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
			  			<Link to="/map" className={"btn btn-" + (location && (!location.state || !location.state.iframe || (location.state.iframe == "https://ampitup.carto.com/builder/4641b54d-5007-47e7-b5b2-eb4903358a94/embed")) ? "primary" : "default") }
							onClick={()=>mapLoading()}
			  			state={{ iframe: "https://ampitup.carto.com/builder/4641b54d-5007-47e7-b5b2-eb4903358a94/embed" }}>
				  			All NYC
				  		</Link>
				  		<Link to="/map" className={"btn  btn-" + (location && location.state && location.state.iframe && location.state.iframe !== "https://ampitup.carto.com/builder/4641b54d-5007-47e7-b5b2-eb4903358a94/embed" ? "primary" : "default") }
							onClick={()=>mapLoading()}
			  			state={{ iframe: "https://ampitup.carto.com/builder/f48204aa-42f8-49dc-831b-3a68afcc3ab7/embed" }}>
				  			RTC-Eligible Zipcodes
				  		</Link>
				  	</div>
		  		</h4>
		  	</div>
			<div id="map-iframe-loading" className="loading loading-lg">
			<iframe id="map-iframe" className="map-container d-invisible" onLoad={()=>mapLoaded()}
			  	frameBorder="0" src={ (location && location.state && location.state.iframe ? location.state.iframe : "https://ampitup.carto.com/builder/4641b54d-5007-47e7-b5b2-eb4903358a94/embed")}>
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
