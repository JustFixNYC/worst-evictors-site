import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Evictor from '../components/evictor'

// CONTENT MODEL:

// data {
//   boroName
    // subtitle {
    //   json
    // }
    // evictors {
    //   boro
    //   rank
    //   name
    //   corporation
    //   description {
    //     json
    //   }
    //   photo {
    //     sizes(maxWidth: 613) {
    //       aspectRatio
    //       src
    //       srcSet
    //       sizes
    //     }
    //   }
    //   photoCaption
    //   evictions
    //   boroUnits
    //   boroFilings
    //   boroPercentFiled
    //   boroPercentRs
    //   citywideEvictions
    //   citywideUnits
    //   citywideFilings
    //   citywidePercentFiled
    //   citywidePercentRs
    //   banks
    //   lawyers
    //   organizingCta {
    //     json
    //   }
    //   organizingPhoto1 {
    //     fluid {
    //       aspectRatio
    //       src
    //       srcSet
    //       sizes
    //     }
    //   }
    //   organizingPhotoCaption1
    //   organizingPhoto2 {
    //     fluid {
    //       aspectRatio
    //       src
    //       srcSet
    //       sizes
    //     }
    //   }
    //   organizingPhotoCaption2
    //   organizingPhoto3 {
    //     fluid {
    //       aspectRatio
    //       src
    //       srcSet
    //       sizes
    //     }
    //   }
    //   organizingPhotoCaption3
    //   evictionsMapUrl {
    //     evictionsMapUrl
    //   }
    //   whoOwnsWhatUrl
    // }  
// }

class BoroList extends React.Component {
render() {
	return (
		<section id={this.props.data.boroName} className="boro-list">
    <div className="boro-list-intro">
      <h1 className="text-primary">{this.props.data.boroName}</h1>
      <h5 className="text-primary">{documentToReactComponents(this.props.data.subtitle.json)}</h5>
    </div>
    {this.props.data.evictors.map(evictor => 
    	<Evictor 
    		key={evictor.name + '-' + evictor.boro} 
    		data={evictor}
            boroName={this.props.data.boroName} />
    )}
    </section>
		);
	}
}

export default BoroList