import React, {Component} from 'react';
import CheckList from './Checklist';

class Card extends Component {
	constructor(){
		super(...arguments);
		this.state = {
			showDetails: false
		};
	}
	toogleDetails(){
		this.setState({showDetails: !this.state.showDetails});
	}
	render() {
		let cardDetails;
		if(this.state.showDetails){
			cardDetails= (
				<div className="card_details">
					{this.props.description}
					<CheckList cardId={this.props.id} tasks={this.props.tasks} />
				</div>
				);
		}
		return (
			<div className="card">
				<div className="card_title" onClick={this.toogleDetails.bind(this)}>{this.props.title}</div>
				{cardDetails}
			</div>
			);
	}
}

export default Card;