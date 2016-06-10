import React, {Component} from 'react';
import CheckList from './Checklist';

class Card extends Component {
	render() {
		return (
			<div className="card">
				<div className="card_title">{this.props.title}</div>
				<div className="card_details">
					{this.props.description}
					<CheckList cardId={this.props.id} task={this.props.task} />
				</div>
			</div>
			);
	}
}

export default Card;