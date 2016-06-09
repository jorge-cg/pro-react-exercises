import React, { Component } from 'react';
import {render} from 'react-dom';

//parent component
class GroceryList extends Component {
  render(){
    return (
      <ul>
      	<ListItem quantity="1" name="Bread" />
      	<ListItem quantity="6" name="Eggs" />
      	<ListItem quantity="2" name="Milk" />
      </ul>
    );
  }
}

//child component
class ListItem extends Component {
	render(){
		return(
				<li>
					{this.props.quantity}x {this.props.name}
				</li>
			);
	}
}

render(<GroceryList />, document.getElementById('root'));
