import React , { Component } from 'react';
import { List , Avatar } from 'antd';
import { Link } from 'react-router-dom';
import TxtTag from '../common/txtTag.js';
import { connect } from 'react-redux';
import axios from 'axios';

class IndexList extends Component{
	constructor(arg){
		super(arg);
		this.state={
			page:1
		}
		this.getData(this.props.tab,this.state.page);
	}

	shouldComponentUpdate(nextProps,nextState){
		if(this.state.page!== nextState.page){
			this.getData(nextProps.tab,nextState.page);
			return false;
		}

		if(this.props.tab !== nextProps.tab){	// 切换时才更新
			this.setState({
				page:1
			});
			this.getData(nextProps.tab,1);
			return false;
		}
		return true;
	}

	getData(tab,page){
		this.props.dispatch((dispatch)=>{
			dispatch({
				type:"LIST_UPDATE"
			});
			axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=10`)
				.then((res)=>{
					dispatch({
						type:"LIST_UPDATE_SUCCESS",
						data:res.data
					});
				})
				.catch((err)=>{
					console.log(err);
					dispatch({
						type:"LIST_UPDATE_ERROR",
						data:err
					})
				})
		});
	}

	render(){
		let {loading,data} = this.props;
		let pagination = {
			current:this.state.page,
			pageSize:10,
			total:1000,
			onChange:((current)=>{
				this.setState({page:current});
				this.getData(this.props.tab,current);
			})
		}
		return (
			<List loading = {loading} dataSource = {data} pagination = {loading?false:pagination}
				renderItem={
					item => (
						<List.Item
							actions = {["回复："+item.reply_count,"访问："+item.visit_count]}
							key={item.id}>
							<List.Item.Meta
								avatar = {<Avatar src={item.author.avatar_url} />}
								title = {<div>
										<TxtTag data={item}/>
										<Link  target="_blank" to={"/details/"+item.id}>{item.title}</Link>
									</div>}
								description = {<p><Link  target="_blank" to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>发表于：{item.last_reply_at.split("T")[0]}</p>}/>
						</List.Item>)}/>
		)
	}
}

export default connect(state=>state.list)(IndexList);