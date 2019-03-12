import React, { Component } from 'react';

import RouterIndex from './router/index.js';
import MainHeader from './view/main-header.js';
import MainFooter from './view/main-footer.js';
import './view/index.css';

class App extends Component {
  render() {
  	return (
  		<div className="pageWrap">
  	  		<MainHeader />
  	  		<div className="main">
  	  			<RouterIndex />
  	  		</div>
  	  		<MainFooter />
  	  	</div>
  	)
  }
}

export default App;