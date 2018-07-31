import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../containers/Series';
import Profile from '../../components/Profile';
import SingleSeries from '../../containers/SingleSeries';

const Main = props => (
	<Switch>
		<Route exact path="/" component={Series} />
		<Route exact path="/series/:id" component={SingleSeries} />
		<Route exact path="/profile" component={Profile} />
	</Switch>
);

export default Main;
