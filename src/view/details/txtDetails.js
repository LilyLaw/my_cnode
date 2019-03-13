import React, { Component } from 'react';
import { Card ,Avatar} from 'antd';
import { Link } from 'react-router-dom';
import TxtTag from '../common/txtTag.js';

class TxtDetails extends Component{
	render(){
		const tmpdata = this.props.data;
		console.log(tmpdata);
		const title = (<div>
			<h1>{tmpdata.title}</h1>
			<div>
				<TxtTag data={tmpdata}></TxtTag>
				<Avatar src={tmpdata.author.avatar_url}></Avatar>
				<Link to={"/user/"+tmpdata.author.loginname}>{tmpdata.author.loginname}</Link>
				发表于：{tmpdata.create_at.split("T")[0]}
			</div>
		</div>);
		return <Card
			title={title}>
			<div dangerouslySetInnerHTML = {{__html:tmpdata.content}}></div>
		</Card>
	}
}

export default TxtDetails;