import React from 'react';

export default class BiodataDesc extends React.Component {

    render() {
        return (
            <>
                <div class="col-8 col-md-7">
                    <p> {this.props.desc}</p>
                </div>
            </>
        )
    }
}