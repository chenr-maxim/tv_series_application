import React, { Component } from 'react';

class Profile extends Component {

	constructor(props) {
		super(props);
		let favoritedShows = JSON.parse(localStorage.getItem('favoriteShows'));
		this.state = {
			favoritedShows: favoritedShows
		}
	}

	componentDidMount() {
		//localStorage.clear();
	}

	displayShows() {

		let displayArray = [];

		for(let i = 0; i < localStorage.length; i++) {
			displayArray[i] = (localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
		}
		return(
			displayArray
		)
	}

	render() {
		return (
			<div>
				{ this.displayShows() }
			</div>
		);	
	}
}

export default Profile;