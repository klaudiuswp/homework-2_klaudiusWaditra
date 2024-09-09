import React from "react";
import propTypes from 'prop-types';

export default class PokemonDetail extends React.Component {

    render() {
        return (
            <>
                <h1>this is details</h1>
                <h3>{this.props.pokemonName}</h3>
            </>
        )
    }
}
PokemonDetail.propTypes = {
    pokemonName: propTypes.string
}
