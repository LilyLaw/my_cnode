import React , {Component} from 'react';
import { Layout  , Row , Col , Divider , Icon , Dropdown , Button} from 'antd';

import Nav from './nav.js';
import 'antd/dist/antd.css'
class MainHeader extends Component{
	render(){
		return (
			<Layout.Header>
				<Row className="wrap">
					<Col md={6} xs={24}>
						<h1 id="logo">My Project</h1>
					</Col>
					<Col md={18} xs={0} >
						<div className="navbox">
							<Divider type="vertical" className="headerDivider"/>
							<Nav mode="horizontal"/>
						</div>
					</Col>
					<Col md={0} xs={24} className="xsNav">
						<Dropdown
							overlay = { <Nav mode="vertical"/> }
							trigger = {['click','hover','touchend']}
							placement = "bottomRight"
						>
							<Button><Icon type="bars"/></Button>
						</Dropdown>
					</Col>
				</Row>
			</Layout.Header>
		)
	}
}

export default MainHeader;