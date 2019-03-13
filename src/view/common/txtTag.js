import React , { Component } from 'react';
import { Tag} from 'antd';

const tab = {
	good:{
		color:"geekblue",
		txt:"精华"
	},
	top:{
		color:"magenta",
		txt:"置顶"
	},
	job:{
		color:"cyan",
		txt:"招聘"
	},
	ask:{
		color:"green",
		txt:"问答"
	},
	dev:{
		 color:"lime",
		 txt:"测试"
	},
	share:{
		color:"purple",
		txt:"分享"
	}
}

class TxtTag extends Component{
	getType(data){
		return data.top?
				"top":
				(data.good?
					"good":data.tab);
	}

	render(){
		let rentab = tab[this.getType(this.props.data)];
		return <Tag color={rentab.color}>{rentab.txt}</Tag>
	}
}

export default TxtTag;