import React, {Component} from 'react';
import CheckList from './Checklist';
import marked from 'marked';

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
				<span dangerouslySetInnerHTML={{_html:marked(this.props.description)}} />
				<CheckList cardId={this.props.id} tasks={this.props.tasks} />
				</div>
				);
		}
		return (
			<div className="card">
			<div className={this.state.showDetails? "card__title card__title--is-open" : "card__title"
		} onClick={this.toogleDetails.bind(this)}>{this.props.title}</div>
		{cardDetails}
		</div>
		);
	}
}

export default Card;