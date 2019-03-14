import React , { Component } from 'react';
import { Menu } from 'antd';
import { Link , withRouter} from 'react-router-dom';
class IndexMenu extends Component{
	constructor(arg){
		super(arg);
		this.state={
			now:this.props.location.pathname
		}
	}

	shouldComponentUpdate(nextProps,nextState){
		if(nextProps.location!==this.props.location){
			this.setState({
				now:nextProps.location.pathname
			});
			return false;
		}
		return true;
	}

	render(){
		let {id,mode} = this.props
		return (
			<Menu id={id} mode={mode} selectedKeys = {[this.state.now]}>
				<Menu.Item key="/index/all">
					<Link to='/index/all'>全部</Link>
				</Menu.Item>
				<Menu.Item key="/index/good">
					<Link to='/index/good'>精华</Link>
				</Menu.Item>
				<Menu.Item key="/index/ask">
					<Link to='/index/ask'>问题</Link>
				</Menu.Item>
				<Menu.Item key="/index/share">
					<Link to='/index/share'>分享</Link>
				</Menu.Item>
				<Menu.Item key="/index/job">
					<Link to='/index/job'>招聘</Link>
				</Menu.Item>
				<Menu.Item key="/index/dev">
					<Link to='/index/dev'>测试</Link>
				</Menu.Item>
			</Menu>
		)
	}
}

export default withRouter((props)=>{
	let {id , mode , location} = props;
	return <IndexMenu id={id} mode={mode} location={location}/>
}) ;