import React from "react";
import Pokemon from "./Pokemon";
import { Link } from "react-router-dom";
function PokemonLists({ pokemons }) {
  return (
    <div>
      <div className="main-title">
        <h1>Pokemon's Store</h1>
      </div>
      <div className="pokemon-list">
        {pokemons.map((pokemon, i) => (
          <Link to={`/pokemon/${pokemon.id}`} key={i}>
            <Pokemon pokemon={pokemon} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PokemonLists;
