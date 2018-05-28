import React, { Component } from 'react'

import Banner from './banner'
import ArtistsList from './artistsList'

const URL_ARTISTS = 'http://localhost:3004/artists'

class Home extends Component{

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
				<ArtistsList/>
			</div>
		)
	}
}

export default Home