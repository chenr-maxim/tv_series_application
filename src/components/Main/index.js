import React from 'react';
import { Switch, Route, browserHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import history from './history';
import Series from '../../containers/Series';
import Signup from '../../components/Signup';
import Profile from '../../containers/Profile';
import SingleSeries from '../../containers/SingleSeries';

class Main extends React.Component {

	render() {
		return (
			<Router history={history}>
				<div>
					<Switch>
						<Route exact path="/" exact component={Signup} />
						<Route exact path="/profile" exact component={Profile} />
						<Route exact path="/app" exact component={Series} />
						<Route exact path="/series/:id" exact component={SingleSeries} />
					</Switch>
				</div>
			</Router>
		)
	}
};

export default Main;
