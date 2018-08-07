import React, { Component } from 'react';
import Loader from '../../components/Loader';

var favoriteSeries = [];

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

	addToFavorites(show2) {

		this.setState({[this.state.show]: show2})

		const newFavoriteShow = {
			show: show2,
			showName: show2.name,
		};

		const favoritedList = [...this.state.favoriteList];
		favoritedList.push(newFavoriteShow);

		console.log('favorited list' + favoritedList);
		console.log('this.state.favoriteList' + this.state.favoriteList);

		this.setState({
			favoritedList,
			newFavoriteShow: ""
		});

		localStorage.setItem("favoriteList", JSON.stringify(favoritedList));
		localStorage.setItem("newFavoriteShow","");
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
						<button onClick={() => this.addToFavorites(show)}> Add to Favorites </button>
						<p> <img alt="Show" src={show.image.medium} /> </p>
					</div>
				}
			</div>
		)
	}
}

export default SingleSeries;
