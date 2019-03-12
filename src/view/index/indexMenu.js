import React , { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
class IndexMenu extends Component{
	render(){
		let {id,mode} = this.props
		return (
			<Menu id={id} mode={mode}>
				<Menu.Item>
					<Link to='/index/all'>全部</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to='/book'>精华</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to='/about'>问题</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to='/index'>分享</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to='/book'>招聘</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to='/about'>测试</Link>
				</Menu.Item>
			</Menu>
		)
	}
}

export default IndexMenu;