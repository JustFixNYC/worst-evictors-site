import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from 'gatsby';

import evictorPlaceholder from '../images/evictor-placeholder.png'

// CONTENT MODEL:

// data {
  // boro
  // rank
  // name
  // corporation
  // description {
  //   json
  // }
  // photo {
  //   sizes(maxWidth: 613) {
  //     aspectRatio
  //     src
  //     srcSet
  //     sizes
  //   }
  // }
  // photoCaption
  // evictions
  // boroUnits
  // boroFilings
  // boroPercentFiled
  // boroPercentRs
  // citywideEvictions
  // citywideUnits
  // citywideFilings
  // citywidePercentFiled
  // citywidePercentRs
  // banks
  // lawyers
  // organizingCta {
  //   json
  // }
  // organizingPhoto1 {
  //   fluid {
  //     aspectRatio
  //     src
  //     srcSet
  //     sizes
  //   }
  // }
  // organizingPhotoCaption1
  // organizingPhoto2 {
  //   fluid {
  //     aspectRatio
  //     src
  //     srcSet
  //     sizes
  //   }
  // }
  // organizingPhotoCaption2
  // organizingPhoto3 {
  //   fluid {
  //     aspectRatio
  //     src
  //     srcSet
  //     sizes
  //   }
  // }
  // organizingPhotoCaption3
  // evictionsMapUrl {
  //   evictionsMapUrl
  // }
  // whoOwnsWhatUrl
// }

class Evictor extends React.Component {
render() {

	const imageURL = (this.props.data.photo ? this.props.data.photo.sizes.src : evictorPlaceholder );
	const style = {
	    backgroundImage: "url("+imageURL+")",
	    backgroundPosition: "center center",
	    backgroundSize: "cover",
	    backgroundRepeat:"no-repeat"
	};

	return (
		<div className="evictor-container">
		  <div className="columns">
		    <div className="column col-2 col-sm-12 evictor-rank">
		    	<div>
			        <h1 className="hide-sm">
			        	{this.props.data.rank}
			        </h1>
			        <h1 className="show-sm">
			        	{this.props.data.rank}
			        	<sup>{this.props.boroName}</sup>
			        </h1>
			        <small className="p-centered hide-sm">{this.props.boroName}</small>
		        </div>
		    </div>
	        <div className="column col-7 col-sm-12">
	        	<div className="evictor-intro">
	            	<h5 className="evictor-name text-uppercase text-secondary mb-1">{this.props.data.name}</h5>
	            	<h6 className="evictor-corp text-dark">{this.props.data.corporation}</h6>
		    	</div>
		    	<div className="evictor-pic-container show-sm">
		        	<div className="evictor-pic s-circle p-centered" style={style}></div>
		        	<small className="caption p-centered text-gray-medium text-center text-italic my-2">
						{this.props.data.photoCaption}
					</small>
				</div>
		    	<div className="evictor-stats">
			    	<div className="columns">
			    		<div className="column col-6 col-md-12 my-2">
			    			<h6 className="text-gray-medium">In RTC Zipcodes</h6>
			    			<h4 className="eviction-count">
		            			<span className="text-primary">{this.props.data.evictions}</span> Evictions
		            		</h4>
		            		<div className="secondary-data">
			            		<span>
			            			<span className="text-primary text-bold mr-1">
			            				{this.props.data.boroUnits}
			            			</span> families housed
			            		</span>
			            		<br />
			            		<span className="tooltip" data-tooltip="Total from January 2013 to June 2015">
			            			<span className="text-primary text-bold mr-1">
			            				{this.props.data.boroFilings}
			            			</span> families sued<sup>*</sup>
			            		</span>
			            		<br/>
			            		<span>
			            			<span className="text-primary text-bold mr-1">
			            				{this.props.data.boroPercentFiled}
			            			</span> lawsuits per family
			            		</span>
			            		<br/>
			            		<span>
			            			<span className="text-primary text-bold mr-1">
			            				{this.props.data.boroPercentRs}%
			            			</span> rent stabilized
			            		</span>
		            		</div>
			    		</div>
			    		<div className="column col-6 col-md-12 my-2">
			    			<h6 className="text-gray-medium">Citywide</h6>
			    			<h4 className="eviction-count">
		            			<span className="text-primary">{this.props.data.citywideEvictions}</span> Evictions
		            		</h4>
		            		<div className="secondary-data">
			            		<span>
			            			<span className="text-primary text-bold mr-1">
			            				{this.props.data.citywideUnits}
			            			</span> families housed
			            		</span>
			            		<br/>
			            		<span className="tooltip" data-tooltip="Total from January 2013 to June 2015">
			            			<span className="text-primary text-bold mr-1">
			            				{this.props.data.citywideFilings}
			            			</span> families sued<sup>*</sup>
			            		</span>
			            		<br/>
			            		<span>
			            			<span className="text-primary text-bold mr-1">
			            				{this.props.data.citywidePercentFiled}
			            			</span> lawsuits per family
			            		</span>
			            		<br/>
			            		<span>
			            			<span className="text-primary text-bold mr-1">
			            				{this.props.data.citywidePercentRs}%
			            			</span> rent stabilized
			            		</span>
			            	</div>
			    		</div>
			    	</div>
			    <br/>
			    	<div>
				    	<span>
				    		Funded by<span>	</span>  
		        			<span className="text-primary text-bold ml-2 tooltip tooltip-right" data-tooltip="List is not exhaustive">
		        				{this.props.data.banks}
		        			</span>
			            </span>
			            <br/>
			            <br/>
			            <span>
				    		Represented by<span> </span>  
		        			<span className="text-primary text-bold ml-2 tooltip tooltip-right" data-tooltip="List is not exhaustive">
		        				{this.props.data.lawyers}
		        			</span>
			            </span>
			        </div>
	            </div>
				{documentToReactComponents(this.props.data.description.json)}
				{this.props.data.organizingCta ? 
					<span>
						<br/>
						<div className="divider text-center" data-content="HOW TO GET INVOLVED"></div>
						<br/>
						{documentToReactComponents(this.props.data.organizingCta.json)}
						<div className="organizing-photos">
							{this.props.data.organizingPhoto1 ?
								<div className="img-container">
									<img src={this.props.data.organizingPhoto1.fluid.src} className="img-responsive py-2" />
									<small className="caption p-centered text-gray-medium text-center text-italic my-2">
										{this.props.data.organizingPhotoCaption1}
									</small>
								</div> : 
								<div/>
							}
							{this.props.data.organizingPhoto2 ?
								<div className="img-container">
									<img src={this.props.data.organizingPhoto2.fluid.src} className="img-responsive py-2" />
									<small className="caption p-centered text-gray-medium text-center text-italic my-2">
										{this.props.data.organizingPhotoCaption2}
									</small>
								</div> : 
								<div/>
							}
							{this.props.data.organizingPhoto3 ?
								<div className="img-container">
									<img src={this.props.data.organizingPhoto3.fluid.src} className="img-responsive py-2" />
									<small className="caption p-centered text-gray-medium text-center text-italic my-2">
										{this.props.data.organizingPhotoCaption3}
									</small>
								</div> : 
								<div/>
							}
						</div>
					</span> :
					<div/>}
					<div className="btn-group evictor-links">
						<Link to="/map" className="btn btn-outline-secondary my-1"
			  			state={{ iframe: (this.props.data.evictionsMapUrl ? this.props.data.evictionsMapUrl.evictionsMapUrl : null) }}>
				  			Go to Evictions Map
				  		</Link>
						<a className="btn btn-outline-secondary my-1" target="_blank"
						href={(this.props.data.whoOwnsWhatUrl ? this.props.data.whoOwnsWhatUrl : null)}>
							View on Who Owns What
						</a>
					</div>
	        </div>
	        <div className="evictor-pic-container column col-3 hide-sm">
	        	<div className="evictor-pic s-circle p-centered" style={style}></div>
	        	<small className="caption p-centered text-gray-medium text-center text-italic my-2">
					{this.props.data.photoCaption}
				</small>
	        </div>
	      </div>	
		</div>
		);
	}
}

export default Evictor