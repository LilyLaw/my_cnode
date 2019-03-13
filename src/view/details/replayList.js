import React, { Component } from 'react';
import { Card ,Avatar , List} from 'antd';
import { Link } from 'react-router-dom';

class ReplayList extends Component{
	render(){
		let {replies,reply_count} = this.props;
		return <Card
			title={reply_count+"条回复"}
			type = "inner">
			<List
				itemLayout = "vertical"
				dataSource={replies}
				renderItem={
					item=>(
						<List.Item
							className = "lll-list-item"
							key={item.id}
							extra={item.ups.length>0?"有"+item.ups.length+"点赞":""}>
							<List.Item.Meta
								avatar = {<Avatar src={item.author.avatar_url}/>}
								description = { <p><Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>发表于：{item.create_at.split("T")[0]}</p> }
							/>
							<div dangerouslySetInnerHTML = {{__html:item.content}}></div>
						</List.Item>
					)}>
			</List>
		</Card>
	}
}

export default ReplayList;