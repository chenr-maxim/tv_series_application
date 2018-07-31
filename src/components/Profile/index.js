import React, { Component } from 'react';

class Profile extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name:'',
			password:'',
			id:''
		};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleNameChange(e) {
		this.setState({name:e.target.value})
		console.log(this.state.name);
	}
	handlePasswordChange(e) {
		this.setState({password:e.target.value})
		console.log(this.state.password);
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state.name);
		console.log(this.state.password);
		console.log("pressed submit");
		this.setState({value: e.target.value});
		console.log(this.state);
		console.log(this.state.value);


	}

	render() {
		const { name, password } = this.state;

		console.log(this.state.name + "name once render");
		console.log(this.state.password + "password once render");

		return(
			<div>
				Enter Profile information here:
				<div>
					<form onSubmit={this.handleSubmit}>
						<input value={this.state.name} type="text" onChange={this.handleNameChange}  placeholder="Name" required />
						<input value={this.state.password} type="password" onChange={this.handlePasswordChange} placeholder="Password" required />
						<input type="submit" value="Submit" /> 
					</form>
				</div>
			</div>

		);
	}
}

export default Profile;

