import React from "react";

import PokemonDetail from "./PokemonDetail";

export default class PokemonComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            pokemonName: ""
        }
    }

    handleClick = () => {
        console.log(this.state.pokemonName);
    }

    render() {
        return (
            <>
                <h1>this is component</h1>
                <input type="text" name="" id="" onChange={e => this.setState({pokemonName: e.target.value})}/>
                <button onClick={this.handleClick}>Cek Pokemon</button>
                <PokemonDetail pokemonName={this.state.pokemonName} />
            </>
        )
    }
}
