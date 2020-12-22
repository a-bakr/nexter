import React, { Component } from "react";

export class Person extends Component {
	render() {
		return (
			<div className="person">
				<img src={this.props.src} alt="" />
				<div className="text-component">
					<h4>{this.props.name}</h4>
					<p>{this.props.hour}</p>
				</div>
			</div>
		);
	}
}

export default Person;
