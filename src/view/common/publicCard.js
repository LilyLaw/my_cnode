import React, { Component } from 'react';
import { Card } from 'antd';

class PublicCard extends Component{
	render(){
		return <div className="wrap">
			{this.props.data.map((item,index)=>{
				return <Card
					title = {item.title}
					type = "inner"
					key = {index}>
					<div
						dangerouslySetInnerHTML = {{
							__html:item.content
						}}
					></div>
				</Card>
			})}
		</div>
	}
}

export default PublicCard;