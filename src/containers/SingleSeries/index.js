import React, { Component } from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {

	constructor(props) {
		super(props);
		this.state = {
			show: null,
			showName: "",
			favoriteList: []
		};

		this.addToFavorites = this.addToFavorites.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	addToFavorites() {

	}

	handleClick(show) {
		this.addToFavorites(show);
		console.log(this.state);
		this.props.history.push('/app');

	}

	componentDidMount () {
		const { id } = this.props.match.params;
 		fetch(`http://api.tvmaze.com/shows/${id}?embed-episodes`)
      .then(response => response.json())
      .then(json => this.setState({ show: json }));
	}

	render() {
		const { show } = this.state;

 		return (
			<div>
				{ show === null && <Loader /> }
				{
					show !== null
					&&
					<div>
						<p> {show.name} </p>
						<p> Premiered - {show.premiered} </p>
						<p> Rating - {show.rating.average} </p>
						<p> Summary - {show.summary} </p>
						<p> <button onClick={() => this.addToFavorites()}> Add to Favorites </button> </p>
						<p> <img alt="Show" src={show.image.medium} /> </p>
					</div>
				}
			</div>
		)
	}
}

export default SingleSeries;
