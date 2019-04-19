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
		        	<sup>{this.props.boroName}</sup>
		        	{this.props.data.rank}
		        </h1>
		    </div>
	        <div className="column col-7 col-sm-12">
	        	<div className="evictor-intro">
	            	<h5 className="evictor-name text-uppercase text-secondary mb-1">{this.props.data.name}</h5>
	            	<h6 className="evictor-corp text-dark">{this.props.data.corporation}</h6>
		    	</div>
		    	<div className="evictor-stats">
			    	<div className="columns">
			    		<div className="column col-6 col-sm-12">
			    			<h6 className="text-gray-medium">In RTC Zipcodes</h6>
			    			<h4 className="eviction-count">
		            			<span className="text-primary">{this.props.data.evictions}</span> Evictions
		            		</h4>
		            		<div className="left-border-bar">
			            		<small>
			            			<span className="text-primary text-bold mr-1">
			            				{this.props.data.boroUnits}
			            			</span> families housed
			            		</small>
			            		<br/>
			            		<small>
			            			<span className="text-primary text-bold mr-1">
			            				{this.props.data.boroFilings}
			            			</span> families sued
			            		</small>
			            		<br/>
			            		<small>
			            			<span className="text-primary text-bold mr-1">
			            				{this.props.data.boroPercentFiled}
			            			</span> lawsuits per family
			            		</small>
			            		<br/>
			            		<small>
			            			<span className="text-primary text-bold mr-1">
			            				{this.props.data.boroPercentRs}%
			            			</span> rent stabilized
			            		</small>
		            		</div>
			    		</div>
			    		<div className="column col-6 col-sm-12">
			    			<h6 className="text-gray-medium">Citywide</h6>
			    			<h4 className="eviction-count">
		            			<span className="text-primary">{this.props.data.evictions}</span> Evictions
		            		</h4>
		            		<small>
		            			<span className="text-primary text-bold mr-1">
		            				{this.props.data.boroUnits}
		            			</span> families housed
		            		</small>
		            		<br/>
		            		<small>
		            			<span className="text-primary text-bold mr-1">
		            				{this.props.data.boroFilings}
		            			</span> families sued
		            		</small>
		            		<br/>
		            		<small>
		            			<span className="text-primary text-bold mr-1">
		            				{this.props.data.boroPercentFiled}
		            			</span> lawsuits per family
		            		</small>
		            		<br/>
		            		<small>
		            			<span className="text-primary text-bold mr-1">
		            				{this.props.data.boroPercentRs}%
		            			</span> rent stabilized
		            		</small>
			    		</div>
			    	</div>
			    <br/>
		    	<small>
		    		Funded by<span>	</span>  
        			<span className="text-primary text-bold ml-2">
        				Goldman Sacks, Merryl Lynch
        			</span>
	            </small>
	            <br/>
	            <small>
		    		Represented by<span>	</span>  
        			<span className="text-primary text-bold ml-2">
        				Lawyer Pete, Lawyer Maggie
        			</span>
	            </small>
	            </div>
				{documentToReactComponents(this.props.data.description.json)}
				<div className="divider text-center" data-content="HOW TO GET INVOLVED"></div>
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