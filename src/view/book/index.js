import React, { Component } from 'react';
import data from './data.js';
import PublicCard from '../common/publicCard.js';

class Book extends Component{
	render(){
		return <PublicCard data={data}></PublicCard>
	}
}

export default Book;