import React from 'react';

export default class BiodataDesc extends React.Component {

    render() {
        return (
            <div className='text-center'>
            <img src={this.props.src} className='img-fluid' width={this.props.width} />
            </div>
        )
    }
}