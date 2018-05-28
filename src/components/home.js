import React, { Component } from 'react'

import Banner from './banner'

class Home extends Component{

	const URL_ARTISTS = 'http://localhost:3004/artists'

	constructor(props){
		super(props);

		this.state = {
			artists:''
		}

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