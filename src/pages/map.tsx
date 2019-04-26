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
	    render={data => <Layout>
		  	<div className="map-title-banner">
		  		<h4 className="p-2 mx-2">2018 Evictions in:
			  		<div className="btn-group mx-1">
			  			<Link to="/map" className={"btn mx-2 btn-" + (location && location.state && location.state.iframe && location.state.iframe === "https://ampitup.carto.com/builder/4641b54d-5007-47e7-b5b2-eb4903358a94/embed" ? "primary" : "default") }
			  			state={{ iframe: "https://ampitup.carto.com/builder/4641b54d-5007-47e7-b5b2-eb4903358a94/embed" }}>
				  			All NYC
				  		</Link>
				  		<Link to="/map" className={"btn mx-2 btn-" + (location && location.state && location.state.iframe && location.state.iframe === "https://ampitup.carto.com/builder/4641b54d-5007-47e7-b5b2-eb4903358a94/embed" ? "default" : "primary") }
			  			state={{ iframe: "https://ampitup.carto.com/builder/f48204aa-42f8-49dc-831b-3a68afcc3ab7/embed" }}>
				  			RTC-Eligible Zipcodes
				  		</Link>
				  	</div>
		  		</h4>
		  	</div>
			<iframe className="map-container d-block"
			  	frameBorder="0" src={ (location && location.state && location.state.iframe ? location.state.iframe : "https://ampitup.carto.com/builder/4641b54d-5007-47e7-b5b2-eb4903358a94/embed")}>
			</iframe>
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
		  </Layout>
		}
    />
)

export default MapPage
