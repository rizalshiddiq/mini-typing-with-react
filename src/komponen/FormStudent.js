import React, { Component } from 'react';
import ListStudent from './ListStudent';

export default class FormStudent extends Component{
	constructor(){
		super()
		this.state = { newStudentName: '' }
	}

	addNewStudent(){
		this.props.addStudents(this.state.newStudentName, 99)
	}

	render(){
		return(
			<div>
				<span>{ this.state.newStudentName }</span>
				<br />
				<input 
					type = "text"
					name = "student_name"
					onChange = { (e) => this.setState({ newStudentName: e.target.value }) }
				/>
				<br />
				<input 
					type = "submit"
					value = "Add Student"
					onClick = { () => this.addNewStudent() }
				/>

				<h2>Student</h2>
			</div>
		)
	}
}