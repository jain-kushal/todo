import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewToDo.css';

class NewToDo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			id: null
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(evt) {
		this.setState({
			name: evt.target.value
		});
	}
	handleSubmit(evt) {
		evt.preventDefault();
		let newToDo = {
			...this.state,
			id: uuid()
		};
		this.state.name !== '' ? this.props.newToDo(newToDo) : alert('Cannot have input field empty!');

		this.setState({
			name: '',
			id: null
		});
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="NewToDo-form">
						<label id="name" />
						<div className="NewToDo-input">
							<input
								id="name"
								name="name"
								type="text"
								value={this.state.name}
								onChange={this.handleChange}
							/>
						</div>
						<div className="NewToDo-button">
							<button>
								<i className="material-icons">add_circle</i>
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default NewToDo;
