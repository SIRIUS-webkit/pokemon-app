import React from "react";

function Pokemon({ pokemon }) {
  const length = pokemon.types.length;
  return (
    <>
      <div className="pokemons-card">
        <div className="pokemons-img">
          <img src={pokemon.sprites["front_default"]} alt={pokemon.name} />
        </div>
        <div className="pokemons-content">
          <div className="pokemons-id">
            <p>#{pokemon.id}</p>
          </div>
          <h4 className="pokemons-name">{pokemon.name}</h4>
          <div className="types">
            {length < 2 ? (
              <div className="single-type">
                <h5>{pokemon.types[0].type.name}</h5>
              </div>
            ) : (
              <div className="two-type">
                <h5>{pokemon.types[0].type.name}</h5>
                <h5 className="left">{pokemon.types[1].type.name}</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pokemon;
