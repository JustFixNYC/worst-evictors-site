import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Evictor from '../components/evictor'

class BoroList extends React.Component {
render() {
	return (
		<section id={this.props.data.boroName} className="boro-list">
          <h3>{this.props.data.boroName}</h3>
          <h5>{documentToReactComponents(this.props.data.subtitle.json)}</h5>
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