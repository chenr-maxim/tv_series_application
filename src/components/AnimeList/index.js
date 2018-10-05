import React, { Component } from 'react';


class AnimeList extends Component {

	state = {
		animeShow: [],
		animeShowName: ''
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
