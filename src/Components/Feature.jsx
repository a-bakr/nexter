import React, { Component } from "react";

export class Feature extends Component {
    render() {
        return (
            <div className="feature">
                <i className={this.props.icon}></i>
                <div className="text">
                    <h4> {this.props.title} </h4>
                    <p> {this.props.prag} </p>
                </div>
            </div>
        );
    }
}

export default Feature;
