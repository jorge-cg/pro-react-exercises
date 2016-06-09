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

render(<GroceryList />, document.getElementById('root'));
