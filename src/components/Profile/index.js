import React, { Component } from 'react';

class Profile extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name:'',
			password:'',
		};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleNameChange(e) {
		this.setState({name:e.target.value})
	}
	handlePasswordChange(e) {
		this.setState({password:e.target.value})
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({name: e.target.name});
		this.setState({password: e.target.password});
		localStorage.setItem('name', JSON.stringify(this.state.name));
		localStorage.setItem('password', JSON.stringify(this.state.password));

		console.log(localStorage.getItem('name'));
		console.log(localStorage.getItem('password'));

	}

	render() {

		return(
			<div>
				Enter Profile information here:
				<div>
					<form onSubmit={this.handleSubmit}>
						<input name="name"value={this.state.name} type="text" onChange={this.handleNameChange}  placeholder="Name" required />
						<input name="password" value={this.state.password} type="password" onChange={this.handlePasswordChange} placeholder="Password" required />
						<input type="submit" value="Sign up" /> 
					</form>
				</div>
			</div>

		);
	}
}

export default Profile;

