import React, { Component } from 'react'

class Default extends Component {

    render() {
        console.log(this.props.location.pathname)
        return (
            <div className="container">
                <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                    <h1>404</h1>
                    <h2>Error</h2>
                    <h3>The requested URL
                    <span className="text-danger">
                            {this.props.location.pathname}
                        </span>{" "}
                        was not found
                    </h3>
                </div>
            </div>
        )
    }
}
export default Default;