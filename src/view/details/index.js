import React, { Component } from 'react';
import TxtDetails from './txtDetails.js';
import ReplayList from './replayList.js';
import { connect } from 'react-redux';
import axios from 'axios';

class Details extends Component{
	constructor(arg){
		super(arg);
		let id = this.props.match.params.id;
		this.getData(id);
	}

	getData(id){
		this.props.dispatch((dispatch)=>{
			dispatch({
				type:"DETAILS_UPDATE"
			});
			axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
				.then((res)=>{
					dispatch({
						type:"DETAILS_UPDATE_SUCCESS",
						data:res.data
					});
				})
				.catch((err)=>{
					console.log(err);
					dispatch({
						type:"DETAILS_UPDATE_ERROR"
					})
				})
		})
	}

	render(){
		// console.log(this.props);
		let {loading,data} = this.props;
		return (
			<div className="wrap">
				<TxtDetails data={data} loading={loading}/>
				<ReplayList loading={loading}
							replies={data.replies}
							reply_count={data.reply_count}/>
			</div>
		)
	}
}

export default connect(state=>(state.details))(Details);