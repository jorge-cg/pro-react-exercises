import React, { Component } from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch';
import ContactsApp from './components/ContactsApp';

//Main component. Renders a Search Bar and a ContactList
class App extends Component {
  constructor(){
  	super();
  	this.state= {
  		contacts: []
  	};
  }

  componentDidMount(){
    fetch('./contacts.json')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({contacts: responseData});
    })
    .catch((error) => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render(){
    return (
      <ContactsApp contacts={this.state.contacts} />
    );
  }
}





render(<App />, document.getElementById('root'));
