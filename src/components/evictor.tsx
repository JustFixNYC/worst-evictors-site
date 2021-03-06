import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import contentfulOptions from '../utils/contentful-rich-text-options';
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

constructor(props) {
    super(props);
    this.state = {organizingModal: null};
  }

onModalOpen(modalNumber) {
    this.setState({
      organizingModal: modalNumber
    });
  };

onModalClose() {
    this.setState({
      organizingModal: null
    });
  };

render() {

	const imageURL = (this.props.data.photo ? this.props.data.photo.sizes.src : evictorPlaceholder );
	const style = {
	    backgroundImage: "url("+imageURL+")",
	    backgroundPosition: "center center",
	    backgroundSize: "cover",
	    backgroundRepeat:"no-repeat"
	};
	const citywide = this.props.isCitywideEvictor || false;

	// Data inconsistency Checking
	if (this.props.data.boroUnits && this.props.data.citywideUnits && 
	this.props.data.boroUnits > this.props.data.citywideUnits) {
		console.log('Check mismatch in units for ' + this.props.data.name);
	}

	if (this.props.data.boroFilings && this.props.data.citywideFilings && 
	this.props.data.boroFilings > this.props.data.citywideFilings) {
		console.log('Check mismatch in filings for ' + this.props.data.name);
	}

	return (
		<div className="evictor-container" id={citywide ? this.props.data.citywideRank : (this.props.boroName + this.props.data.rank)}>
		  <div className="columns">
		    <div className="column col-2 col-sm-4 evictor-rank">
		    	<div>
			        <h1 className={citywide && this.props.data.citywideRank > 9 ? "double-digit" : ""}>
			        	{citywide ? this.props.data.citywideRank : this.props.data.rank}
			        </h1>
			        {!citywide && <small>{this.props.boroName}</small>}
		        </div>
		    </div>
		   	<div className="column col-8 col-sm-8 show-sm">
			   	<div className="evictor-pic-container">
		        	<div className="evictor-pic s-circle p-centered" style={style}></div>
		        	<small className="caption p-centered text-gray-medium text-center text-italic my-2">
						{this.props.data.photoCaption}
					</small>
				</div>
			</div>
	        <div className="column col-7 col-sm-12">
	        	<div className="evictor-intro">
	            	<h5 className="evictor-name text-uppercase text-secondary mb-1">{this.props.data.name}</h5>
	            	<h6 className="evictor-corp text-dark">{this.props.data.corporation}</h6>
					<h6 className="text-gray-medium text-italic">Last year's rank: {this.props.data.rankLastYear ? <><sup>#</sup>{this.props.data.rankLastYear}</>: 'N/A'}</h6>
		    	</div>
		    	<div className="evictor-stats">
			    	<div className="columns">
			    		<div className="column col-12 rtc-data">
			    			<h4 className="eviction-count">
		            			<span className="text-primary">{citywide ? this.props.data.citywideEvictions : this.props.data.evictions}</span> Evictions
		            		</h4>
		            		<div className="secondary-data">
			            		<span>
			            			<span className="text-primary text-bold mr-1">
										{citywide ? this.props.data.citywideUnits : this.props.data.boroUnits}
			            			</span> families housed
			            		</span>
			            		<br />
			            		<span className="tooltip" data-tooltip="Total from January 2013 to June 2015">
			            			<span className="text-primary text-bold mr-1">
										{citywide ? this.props.data.citywideFilings : this.props.data.boroFilings}
			            			</span> families sued<sup>*</sup>
			            		</span>
			            		<br/>
			            		<span>
			            			<span className="text-primary text-bold mr-1">
										{citywide ? this.props.data.citywidePercentRs : this.props.data.boroPercentRs}%
			            			</span> rent stabilized
			            		</span>
								<br/>
			            		<span className="tooltip" data-tooltip="Landlord's net worth likely much higher.">
			            			<span className="text-primary text-bold mr-1">
			            				{this.props.data.estimatedWorth}
			            			</span> paid for buildings<sup>*</sup>
			            		</span>
		            		</div>
			    		</div>
			    	</div>
			    	<div className="mb-2">
				    	<span>
				    		Funded by<span>	</span>  
		        			<span className="text-primary text-bold ml-2">
		        				{this.props.data.banks}
		        			</span>
		        			<nobr className="text-gray-medium text-italic pl-1">(Among Others)</nobr>
			            </span>
			            <br/>
			            <span>
				    		Represented by<span> </span>  
		        			<span className="text-primary text-bold ml-2">
		        				{this.props.data.lawyers}
		        			</span>
		        			<nobr className="text-gray-medium text-italic pl-1">(Among Others)</nobr>
			            </span>
						<br/>
						<span>
				    		Evictions conducted by<span> </span>  
		        			<span className="text-primary text-bold ml-2">
		        				{this.props.data.marshals}
		        			</span>
		        			<nobr className="text-gray-medium text-italic pl-1">(Among Others)</nobr>
			            </span>
			        </div>
	            </div>
	            <div className="btn-group evictor-links">
					{!citywide && this.props.data.updatedRtcEvictionsMapUrl && this.props.data.updatedRtcEvictionsMapUrl.updatedRtcEvictionsMapUrl && 
					<Link to="/map" className="btn btn-outline-primary my-1"
					  state={{ 
						  iframe: this.props.data.updatedRtcEvictionsMapUrl.updatedRtcEvictionsMapUrl,
						  mapType: 'rtc'
					  }}>
			  			View on Evictions Map
					  </Link>}
					{citywide && this.props.data.citywideEvictionsMapUrl && this.props.data.citywideEvictionsMapUrl.citywideEvictionsMapUrl && 
					<Link to="/map" className="btn btn-outline-primary my-1"
		  			state={{ 
						  iframe: this.props.data.citywideEvictionsMapUrl.citywideEvictionsMapUrl,
						  mapType: 'citywide'
						  }}>
			  			View on Evictions Map
			  		</Link>}
					{this.props.data.whoOwnsWhatUrl && 
					<a className="btn btn-outline-primary my-1" target="_blank"
					href={this.props.data.whoOwnsWhatUrl}>
						View on Who Owns What
					</a>}
				</div>
				{!citywide && this.props.data.description && this.props.data.description.json && documentToReactComponents(this.props.data.description.json, contentfulOptions)}
				{citywide && this.props.data.citywideListDescription && this.props.data.citywideListDescription.json && documentToReactComponents(this.props.data.citywideListDescription.json, contentfulOptions)}
				{this.props.data.organizingCta ? 
					<span className="get-involved">
						<div className="divider text-center" data-content="HOW TO GET INVOLVED"></div>
						{documentToReactComponents(this.props.data.organizingCta.json, contentfulOptions)}
						<div className="organizing-photos">
							{this.props.data.organizingPhoto1 ?
								<div>
									<div className="img-container mb-2">
										<img src={this.props.data.organizingPhoto1.fluid.src} onClick={() => this.onModalOpen(1)} className="img-responsive my-2" />
									</div>
									<div className={"modal" + (this.state.organizingModal === 1 ? " active" : "")} id="modal-id">
									  <a onClick={() => this.onModalClose()} className="modal-overlay" aria-label="Close"></a>
									  <div className="modal-container">
									    <div className="modal-header">
									      <a onClick={() => this.onModalClose()} className="btn btn-clear float-right" aria-label="Close"></a>
									    </div>
									    <div className="modal-body">
									      <div className="content">
									        <img src={this.props.data.organizingPhoto1.fluid.src} className="img-responsive my-2" />
											<small className="caption p-centered text-gray-medium text-center text-italic my-2">
												{this.props.data.organizingPhotoCaption1}
											</small>
									      </div>
									    </div>
									  </div>
									</div> 
								</div>: 
								<div/>
							}
							{this.props.data.organizingPhoto2 ?
								<div>
									<div className="img-container mb-2">
										<img src={this.props.data.organizingPhoto2.fluid.src} onClick={() => this.onModalOpen(2)} className="img-responsive my-2" />
									</div>
									<div className={"modal" + (this.state.organizingModal === 2 ? " active" : "")} id="modal-id">
									  <a onClick={() => this.onModalClose()} className="modal-overlay" aria-label="Close"></a>
									  <div className="modal-container">
									    <div className="modal-header">
									      <a onClick={() => this.onModalClose()} className="btn btn-clear float-right" aria-label="Close"></a>
									    </div>
									    <div className="modal-body">
									      <div className="content">
									        <img src={this.props.data.organizingPhoto2.fluid.src} className="img-responsive my-2" />
											<small className="caption p-centered text-gray-medium text-center text-italic my-2">
												{this.props.data.organizingPhotoCaption2}
											</small>
									      </div>
									    </div>
									  </div>
									</div> 
								</div> : 
								<div/>
							}
							{this.props.data.organizingPhoto3 ?
								<div>
									<div className="img-container mb-2">
										<img src={this.props.data.organizingPhoto3.fluid.src} onClick={() => this.onModalOpen(3)} className="img-responsive my-2" />
									</div>
									<div className={"modal" + (this.state.organizingModal === 3 ? " active" : "")} id="modal-id">
									  <a onClick={() => this.onModalClose()} className="modal-overlay" aria-label="Close"></a>
									  <div className="modal-container">
									    <div className="modal-header">
									      <a onClick={() => this.onModalClose()} className="btn btn-clear float-right" aria-label="Close"></a>
									    </div>
									    <div className="modal-body">
									      <div className="content">
									        <img src={this.props.data.organizingPhoto3.fluid.src} className="img-responsive my-2" />
											<small className="caption p-centered text-gray-medium text-center text-italic my-2">
												{this.props.data.organizingPhotoCaption3}
											</small>
									      </div>
									    </div>
									  </div>
									</div> 
								</div> : 
								<div/>
							}
						</div>
					</span> :
					<div/>}
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