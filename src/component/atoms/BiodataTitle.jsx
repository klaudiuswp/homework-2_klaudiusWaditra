import React from 'react';

export default class BiodataDesc extends React.Component {

    render() {
        return (
            <>
                <div class="col-4 col-md-5">
                    <p>{this.props.title} </p>
                </div>
            </>
        )
    }
}
