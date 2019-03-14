import React, { Component } from 'react';
import { Avatar , Row , Col} from 'antd';
import UserInfoList from './userInfoList.js';
import { connect } from 'react-redux';
import axios from 'axios';
class User extends Component{
	constructor(arg){
		super(arg);
		let id = this.props.match.params.id;
		this.getData(id);
	}

	shouleComponentUpdate(nextProps,nextState){
		if(nextProps.match.params.id !== this.props.match.params.id){
			this.getData(nextProps.match.params.id);
			return false;
		}
		return true;
	}

	getData(id){
		this.props.dispatch((dispatch)=>{
			dispatch({
				type:"USER_UPDATE"
			});
			axios.get(`https://cnodejs.org/api/v1/user/${id}`)
				.then((res)=>{
					dispatch({
						type:"USER_UPDATE_SUCCESS",
						data:res.data
					});
				})
				.catch((err)=>{
					dispatch({
						type:"USER_UPDATE_ERROR"
					});
				})
		})
	}

	render(){
		let {loading,data} = this.props;
		return (
			<div className="wrap">
				<Avatar src={data.avatar_url} className="user-avatar"/>
				<Row className="user-basicinfo">
					<Col md={8}>用户名：<a>{data.loginname}</a></Col>
					<Col md={8}>积分：<a>{data.score}</a></Col>
					<Col md={8}>注册时间：<a>{data.create_at.split("T")[0]}</a></Col>
				</Row>
				<UserInfoList loading={loading} data={data.recent_topics} title={"最近发表"}/>
				<UserInfoList loading={loading} data={data.recent_replies} title={"最近回复"}/>
			</div>
		)
	}
}

export default connect(state=>(state.user))(User);