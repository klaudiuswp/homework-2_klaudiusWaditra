import React from 'react';

export default class Link extends React.Component {

    render() {
        return (
            <a className="nav-link" href={this.props.href}>{this.props.value}</a>
        )
    }
}