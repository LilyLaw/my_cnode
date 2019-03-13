import React, { Component } from 'react';
import { Avatar , Row , Col} from 'antd';
import data from './data.js';
import UserInfoList from './userInfoList.js';

class User extends Component{
	render(){
		let tdata = data.data;
		return (
			<div className="wrap">
				<Avatar src={tdata.avatar_url} className="user-avatar"/>
				<Row className="user-basicinfo">
					<Col md={8}>用户名：<a>{tdata.loginname}</a></Col>
					<Col md={8}>积分：<a>{tdata.score}</a></Col>
					<Col md={8}>注册时间：<a>{tdata.create_at.split("T")[0]}</a></Col>
				</Row>
				<UserInfoList data={tdata.recent_topics} title={"最近发表"}/>
				<UserInfoList data={tdata.recent_replies} title={"最近回复"}/>
			</div>
		)
	}
}

export default User;