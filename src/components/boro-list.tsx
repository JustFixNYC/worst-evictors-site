import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Evictor from '../components/evictor'

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
    		data={evictor} />
    )}
    </section>
		);
	}
}

export default BoroList