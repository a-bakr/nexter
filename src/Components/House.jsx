import React, { Component } from "react";

export class House extends Component {
	render() {
		return (
			<div className="house">
				<img src={this.props.img} alt="" />
				<h3 className="title">{this.props.title}</h3>
				<div className="daitels">
					<div>
						<div className="flex">
							<i className="fa fa-map-marker-alt fa-2x"></i>
							<p> {this.props.location} </p>
						</div>
						<div className="flex">
							<i className="fa fa-user-alt fa-2x"></i>
							<p>{this.props.rooms}</p>
						</div>
					</div>
					<div>
						<div className="flex">
							<i className="fa fa-expand fa-2x"></i>
							<p>{this.props.area}</p>
						</div>
						<div className="flex">
							<i className="fa fa-key fa-2x"></i>
							<p>{this.props.cost}</p>
						</div>
					</div>
				</div>
				<h3 className="call">CONTACT REALTOR</h3>
			</div>
		);
	}
}

export default House;
