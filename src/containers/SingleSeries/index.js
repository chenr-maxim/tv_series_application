import React, { Component } from 'react';
import Loader from '../../components/Loader';

var favoriteSeries = [];

class SingleSeries extends Component {

	constructor(props) {
		super(props);
		this.state = {
			show: null
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		alert('Show was added!');
		favoriteSeries.push(this.state.show.name);
		localStorage.setItem('favoriteShow', JSON.stringify(favoriteSeries));
		console.log(localStorage.getItem('favoriteShow'));

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
						<button onClick={this.handleClick}> Add to Favorites </button>
						<p> <img alt="Show" src={show.image.medium} /> </p>
					</div>
				}
			</div>
		)
	}
}

export default SingleSeries;
