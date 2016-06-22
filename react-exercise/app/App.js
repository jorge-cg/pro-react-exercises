import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import SearchBar from './components/SearchBar';
import ContactList from './components/ContactList';

//Main component. Renders a Search Bar and a ContactList
class ContactsApp extends Component {
  constructor(){
  	super();
  	this.state= {
  		filterText: ''
  	};
  }
  render(){
    return (
      <div>
      	<SearchBar />
      	<ContactList contacts={this.props.contacts} />
      </div>
    );
  }
}

ContactsApp.propTypes= {
	contacts: PropTypes.arrayOf(PropTypes.object)
}


let contacts = [
 { name: "Cassio Zen", email: "cassiozen@gmail.com" },
 { name: "Dan Abramov", email: "gaearon@somewhere.com" },
 { name: "Pete Hunt", email: "floydophone@somewhere.com" },
 { name: "Paul O’Shannessy", email: "zpao@somewhere.com" },
 { name: "Ryan Florence", email: "rpflorence@somewhere.com" },
 { name: "Sebastian Markbage", email: "sebmarkbage@here.com" },
];

render(<ContactsApp  contacts={contacts} />, document.getElementById('root'));
