import React from 'react'
import { Link } from 'gatsby'

import '../styles/map.scss'

import Layout from '../components/layout'

const MapPage = () => (
  <Layout>
	<iframe className="map-container"
	  	frameBorder="0" src="https://ampitup.carto.com/builder/4641b54d-5007-47e7-b5b2-eb4903358a94/embed">
	</iframe> 
  </Layout>
)

export default MapPage
