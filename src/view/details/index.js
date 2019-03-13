import React, { Component } from 'react';
import TxtDetails from './txtDetails.js';
import ReplayList from './replayList.js';
import data from './data.js';

class Details extends Component{
	render(){
		return (
			<div className="wrap">
				<TxtDetails data={data.data}/>
				<ReplayList replies={data.data.replies} reply_count={data.data.reply_count}/>
			</div>
		)
	}
}

export default Details;