import React, { Component } from 'react';
import { Row , Col} from 'antd';
import IndexMenu from './indexMenu.js';
import IndexList from './indexList.js';

class Index extends Component{
	render(){
		return (
			<Row className="wrap">
				<Col md={6} xs={0} className="indexSider">
					<IndexMenu id="indexMenu" mode="vertical"></IndexMenu>
				</Col>
				<Col md={0} xs={24}>
					<IndexMenu id="indexXSMenu" mode="horizontal"></IndexMenu>
				</Col>
				<Col className="indexList" md={18} xs={24}>
					<IndexList></IndexList>
				</Col>
			</Row>
		)
	}
}

export default Index;