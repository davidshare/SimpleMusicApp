import React, { Component } from 'react'

import Banner from './banner'

class Home extends Component{

	constructor(props){
		super(props);
		
	}

	render(){
		return(
			<div>
				<Banner />
			</div>
		)
	}
}

export default Home