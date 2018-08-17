import React, { Component } from 'react';


class AnimeList extends Component {

	state = {
		animeShow: [],
		animeShowName: ''
	}

	componentDidMount() {

		this.setState({ animeShowName: e.target.value});


		fetch(`http://api.jikan.moe/${e.target.value}/`)
			.then(response => response.json())
			.then(json => this.setState({ animeShow: json})
			.catch(err => {
				console.error('An error has occured',err);
			}));
	}

	render() {
		const { animeShow, animeShowName } = this.state;

		return(
			<div>
				<h2> Anime Shows </h2>
				<div>
					<input value={animeShowName} type="text" onChange={this.onSeriesInputChange} />
				</div>
			</div>

		)
	}

}
export default AnimeList
