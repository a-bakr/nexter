/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export class Btn extends Component {
    render() {
        return (
            <>
                <a className="btn btn-main">{this.props.text}</a>
            </>
        );
    }
}

export default Btn;
