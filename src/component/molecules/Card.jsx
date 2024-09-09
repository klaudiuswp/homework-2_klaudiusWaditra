import React from 'react';

export default class Card extends React.Component {

    render() {
        return (
            <>
                <div className='col-md-4 px-2'>
                    <div className="card">
                        <div className="card-header">
                            {this.props.title}
                        </div>
                        <div className="card-body">
                            <p className="card-text">{this.props.desc}</p>
                            <p><b>139</b> went View</p>
                            <a href="#" className="btn btn-secondary">View</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}