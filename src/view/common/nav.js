import React , { Component } from 'react';
import {Link} from 'react-router-dom';
import {  Menu , Icon } from 'antd';

class Nav extends Component{
	render(){
	let mode = this.props.mode;
		return (
			<Menu mode={mode} theme="dark">
				<Menu.Item>
					<Link to='/index'><Icon type="home"/>首页</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to='/book'><Icon type="hdd"/>教程</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to='/about'><Icon type="team"/>关于</Link>
				</Menu.Item>
			</Menu>
		)
	}
}

export default Nav;