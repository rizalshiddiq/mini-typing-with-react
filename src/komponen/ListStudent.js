import React, { Component } from 'react';

export default class ListStudent extends Component{
	render(){
		return(
			<div>
				<ul>
					{
						this.props.students.map((students, idx) => {
							return <li key = {idx}> { students.name }, age { students.age }</li>
						})
					}
				</ul>
			</div>
		)
	}
}