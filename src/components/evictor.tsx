import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

class Evictor extends React.Component {
render() {

	const imageURL = (this.props.data.photo ? this.props.data.photo.sizes.src : '');
	const style = {
	    backgroundImage: "url("+imageURL+")",
	    backgroundPosition: "center center",
	    backgroundSize: "cover",
	    backgroundRepeat:"no-repeat"
	};

	return (
		<div className="evictor-container">
		  <div className="columns">
		    <div className="column col-2 col-sm-2 hero hero-sm evictor-rank">
		        <h1 className="p-centered">
		        	<sup>#</sup>
		        	{this.props.data.rank}
		        </h1>
		    </div>
	        <div className="column col-7 col-sm-12">
	        	<div className="evictor-intro">
	            	<h5 className="evictor-name text-uppercase text-secondary mb-1">{this.props.data.name}</h5>
	            	<h6 className="evictor-corp text-gray">{this.props.data.corporation}</h6>
	            	<h4 className="eviction-count">
	            		<span className="text-secondary">{this.props.data.evictions}</span> Evictions
	            	</h4>
		    	</div>

		        <table className="eviction-stats mb-2">
				  <tbody>
				    <tr>
				      <td className="text-primary text-bold">64</td>
				      <td>families evicted</td>
				      <td className="text-primary text-bold">64</td>
				      <td>families evicted</td>
				      <td className="text-primary text-bold">1684</td>
				      <td>units owned</td>
				    </tr>				  
				    <tr>
				      <td className="text-primary text-bold">127%</td>
				      <td>families sued</td>
				      <td className="text-primary text-bold">127%</td>
				      <td>families evicted</td>
				      <td className="text-primary text-bold">1684</td>
				      <td>units owned</td>
				    </tr>
				  </tbody>
				</table>

				{documentToReactComponents(this.props.data.description.json)}
	        </div>
	        <div className="column col-3 col-sm-12 hero hero-sm">
	        	<div className="evictor-pic s-circle p-centered" style={style}></div>
	        </div>
	      </div>	
		</div>
		);
	}
}

export default Evictor