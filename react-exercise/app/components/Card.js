import React, {Component} from 'react';
import CheckList from './Checklist';

class Card extends Component {
	constructor(){
		super(...arguments);
		this.state = {
			showDetails: false
		};
	}
	render() {
		return (
			<div className="card">
				<div className="card_title">{this.props.title}</div>
				<div className="card_details">
					{this.props.description}
					<CheckList cardId={this.props.id} tasks={this.props.tasks} />
				</div>
			</div>
			);
	}
}

export default Card;