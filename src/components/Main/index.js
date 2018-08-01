import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../containers/Series';
import Signup from '../../components/Signup';
import Profile from '../../containers/Profile';
import SingleSeries from '../../containers/SingleSeries';

const Main = (props) => (
	<Switch>
		<Route exact path="/" exact component={Signup} />
		<Route exact path="/profile" exact component={Profile} />
		<Route exact path="/app" exact component={Series} />
		<Route exact path="/series/:id" exact component={SingleSeries} />
	</Switch>
);

export default Main;
