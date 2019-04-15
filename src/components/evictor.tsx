import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// CONTENT MODEL:

// data {
//   boro
//   rank
//   name
//   corporation
//   evictions
//   description {
//     json
//   }
//   boroUnits
//   boroFilings
//   boroPercentFiled
//   boroPercentRs
//   citywideUnits
//   citywideEvictions
//   photo {
//     sizes(maxWidth: 613) {
//             aspectRatio
//             src
//             srcSet
//             sizes
//           } 
//   }
// }

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
		    <div className="column col-2 col-sm-2 evictor-rank">
		        <h1 className="float-right">
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
				      <td className="text-primary text-bold">{this.props.data.boroUnits}</td>
				      <td>RTC units</td>
				      <td className="text-primary text-bold">{this.props.data.boroFilings}</td>
				      <td>RTC filings</td>
				      <td className="text-primary text-bold">{this.props.data.citywideUnits}</td>
				      <td>citywide units</td>
				    </tr>				  
				    <tr>
				      <td className="text-primary text-bold">{this.props.data.boroPercentRs}%</td>
				      <td>rent stabilized</td>
				      <td className="text-primary text-bold">{this.props.data.boroPercentFiled}%</td>
				      <td>families sued</td>
				      <td className="text-primary text-bold">{this.props.data.citywideEvictions}</td>
				      <td>evictions citywide</td>
				    </tr>
				  </tbody>
				</table>

				{documentToReactComponents(this.props.data.description.json)}
	        </div>
	        <div className="column col-3 col-sm-12">
	        	<div className="evictor-pic s-circle p-centered" style={style}></div>
	        </div>
	      </div>	
		</div>
		);
	}
}

export default Evictor