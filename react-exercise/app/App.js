import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import SearchBar from './components/SearchBar'

//Main component. Renders a Search Bar and a ContactList
class ContactsApp extends Component {
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
	contacts: PropTypes.arrayOf(Proptypes.object)
}

render(<App />, document.getElementById('root'));
