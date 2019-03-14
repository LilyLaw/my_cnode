import React , { Component } from 'react';
import {Link , withRouter } from 'react-router-dom';
import {  Menu , Icon } from 'antd';

class Nav extends Component{
	constructor(arg){
		super(arg);
		var location = this.props.location.pathname;
		let now = this.getNow(location);
		this.state={
			now:now
		}
	}

	shouldComponentUpdate(nextProps){
		if(nextProps.location!==this.props.location){
			this.setState({
				now : this.getNow(nextProps.location.pathname)
			});
			return false;
		}
		return true;
	}

	getNow(s){
		return s.split("/")[1];
	}

	render(){
	let mode = this.props.mode;
		return (
			<Menu mode={mode} theme="dark" selectedKeys={[this.state.now]}>
				<Menu.Item key="index">
					<Link to='/index'><Icon type="home"/>首页</Link>
				</Menu.Item>
				<Menu.Item key="book">
					<Link to='/book'><Icon type="hdd"/>教程</Link>
				</Menu.Item>
				<Menu.Item key="about">
					<Link to='/about'><Icon type="team"/>关于</Link>
				</Menu.Item>
			</Menu>
		)
	}
}

export default withRouter((props)=>{
	let {mode , location} = props;
	return <Nav mode = {mode} theme="dark" location={location}></Nav>
});