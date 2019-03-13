import React, { Component } from 'react';
import { Avatar , Card , List} from 'antd';

class UserInfoList extends Component{
	render(){
		return <Card
			title={this.props.title}
			type="inner">
			<List
				dataSource={this.props.data}
				renderItem={
					item=>(
						<List.Item key={item.id}>
							<List.Item.Meta
								className = "user-recent"
						        avatar={<Avatar src={item.author.avatar_url} />}
						        title={ <p>
						        			<a>{item.author.loginname}</a>
						        			<a href={"/book/"+item.id} style={{marginLeft:"2em",fontSize:"1.2em",fontWeight:"normal"}}>{item.title}</a>
											<span style={{float:"right"}}>最后回复于{item.last_reply_at.split("T")[0]}</span>
					        			</p>}
						    />
					        </List.Item>
					)
				}>
			</List>
		</Card>
	}
}

export default UserInfoList;