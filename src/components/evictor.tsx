import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

class Evictor extends React.Component {
render() {
	return (
		<div className="evictor-container">
		  <div className="columns">
		    <div className="column col-3 col-sm-12 hero hero-sm">
		      <div className="columns">
		      	<div className="column col-2">
		        	<h1 className="evictor-rank float-left p-centered">{this.props.data.rank}</h1>
		        </div>
		        <div className="column col-10">
		            <div className="evictor-pic s-circle p-centered"></div>
		            <h5 className="evictor-name text-center">{this.props.data.name}</h5>
		            <h6 className="evictor-name text-italic text-center">{this.props.data.corporation}</h6>
		        </div>
		      </div>
		    </div>
		    <div className="column col-9 col-sm-12 hero hero-sm">
		      <div className="hero-body px-2">
		        <h4>{this.props.data.evictions} Evictions</h4>
		        {documentToReactComponents(this.props.data.description.json)}
		      </div>
		    </div>
		  </div>	
		</div>
		);
	}
}

export default Evictor