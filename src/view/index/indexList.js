import React , { Component } from 'react';
import { List , Avatar} from 'antd';
import { Link } from 'react-router-dom';
import data from './data.js';

class IndexList extends Component{
	render(){
		return (
			<List
				dataSource = {data.data}
				renderItem={
					item => (
						<List.Item>
							<List.Item.Meta
								avatar = {<Avatar src={item.author.avatar_url} />}
								title = {<Link to={"/details/"+item.id}>{item.title}</Link>}
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