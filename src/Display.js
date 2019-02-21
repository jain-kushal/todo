import React, { Component } from 'react';
import Todo from './Todo.js';
import NewToDo from './NewToDo.js';
import uuid from 'uuid/v4';
import './Display.css';

class Display extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [
				{
					name: 'Task one',
					id: uuid(),
					completed: false
				},
				{
					name: 'Task two',
					id: uuid(),
					completed: true
				}
			]
		};
		this.renderTodos = this.renderTodos.bind(this);
		this.addToDo = this.addToDo.bind(this);
		this.editToDo = this.editToDo.bind(this);
	}
	addToDo(newTodo) {
		this.setState((st) => ({
			tasks: [ ...st.tasks, newTodo ]
		}));
	}
	removeToDo(id) {
		this.setState((st) => ({
			tasks: st.tasks.filter((task) => task.id !== id)
		}));
	}
	editToDo(newData) {
		const updatedToDos = this.state.tasks.map((task) => {
			if (newData.id === task.id) {
				return { ...task, name: newData.name, completed: false };
			} else {
				return { ...task };
			}
		});
		this.setState({ tasks: updatedToDos });
	}
	renderTodos() {
		return (
			<ul id="Display-ul">
				{this.state.tasks.map((task) => (
					<li key={task.id}>
						<Todo
							taskName={task.name}
							id={task.id}
							completed={task.completed}
							removeToDo={() => this.removeToDo(task.id)}
							editToDo={this.editToDo}
						/>
					</li>
				))}
			</ul>
		);
	}
	render() {
		return (
			<div className="Display">
				<div className="Display-container">
					<div className="Display-heading">
						<h1>To-do List</h1>
						<p>Managing work made easy...</p>
					</div>
					{this.renderTodos()}
					<NewToDo newToDo={this.addToDo} />
				</div>
			</div>
		);
	}
}
export default Display;
