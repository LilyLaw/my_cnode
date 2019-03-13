import React , { Component } from 'react';
import { List , Avatar} from 'antd';
import { Link } from 'react-router-dom';
import TxtTag from '../common/txtTag.js';
import data from './data.js';

class IndexList extends Component{
	render(){
		return (
			<List
				dataSource = {data.data}
				renderItem={
					item => (
						<List.Item
							actions = {["回复："+item.reply_count,"访问："+item.visit_count]}
							key={item.id}
						>
							<List.Item.Meta
								avatar = {<Avatar src={item.author.avatar_url} />}
								title = {<div><TxtTag data={item}/><Link to={"/details/"+item.id}>{item.title}</Link></div>}
								description = {<p><Link to={"/user/"+item.author.loginname}>
													{item.author.loginname}
												</Link>发表于：{item.last_reply_at.split("T")[0]}</p>}
							/>
						</List.Item>
					)
				}
			/>
		)
	}
}

export default IndexList;