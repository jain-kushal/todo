import React, { Component } from 'react';
import './ToDo.css';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			name: this.props.taskName,
			id: this.props.id,
			completed: this.props.completed
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleEditClick = this.handleEditClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleChange(evt) {
		this.setState({
			name: evt.target.value,
			completed: false
		});
	}
	handleEditClick(evt) {
		this.setState({
			isEditing: !this.state.isEditing
		});
	}
	handleSubmit(evt) {
		evt.preventDefault();
		this.props.editToDo(this.state);
		this.setState({
			isEditing: false
		});
	}
	handleClick(evt) {
		this.setState((st) => ({
			completed: !st.completed
		}));
	}
	render() {
		let toDoDisplay = (
				<div className="ToDo-Display">
					<div
						className={this.state.completed ? 'ToDo-DisplayName completed' : 'ToDo-DisplayName'}
						onClick={this.handleClick}
					>
						{this.props.taskName}
					</div>
					<div className="ToDo-DisplayButtons">
						<button onClick={this.handleEditClick}>
							<i className="material-icons">edit</i>
						</button>

						<button onClick={this.props.removeToDo}>
							<i className="material-icons">delete</i>
						</button>
					</div>
				</div>
			),
			editToDo = (
				<form onSubmit={this.handleSubmit}>
					<label id="name" />
					<div className="ToDo-form">
						<div className="ToDo-formInput">
							<input
								id="name"
								name="name"
								type="text"
								value={this.state.name}
								onChange={this.handleChange}
							/>
						</div>
						<div className="ToDo-formButton">
							<button>Save</button>
						</div>
					</div>
				</form>
			);
		return <div>{this.state.isEditing ? editToDo : toDoDisplay}</div>;
	}
}

export default Todo;
