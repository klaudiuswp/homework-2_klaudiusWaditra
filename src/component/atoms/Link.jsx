import React from 'react';

export default class Link extends React.Component {

    render() {
        return (
            <a className={this.props.class} href={this.props.href}>{this.props.value}</a>
        )
    }
}