import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Pokemondetails() {
  const [singlepokemon, setSinglepokemon] = useState([]);
  const [ability, setAbility] = useState("");
  const [imgsource, setImgsource] = useState("");
  const name = useParams();

  useEffect(() => {
    const fetchSinglePok = async () => {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name.name}`)
        .then((res) => {
          setSinglepokemon(res.data);
          setAbility(res.data.abilities[0].ability.name);
          setImgsource(res.data.sprites["front_default"]);
        });
    };
    fetchSinglePok();
  }, []);

  return (
    <div>
      <div className="single-details">
        <div className="title">
          <div className="pokemon-name">
            {singlepokemon.name} <span className="id">#{singlepokemon.id}</span>
          </div>
        </div>
        <div className="details">
          <div className="single-img">
            <img src={imgsource} alt={singlepokemon.name} />
          </div>
          <div className="fact">
            <div>
              <p>
                Height <br />
                {singlepokemon.height / 10} m
              </p>
              <p>
                Order
                <br />
                {singlepokemon.order}
              </p>
            </div>
            <div>
              <p>
                Weight
                <br />
                {singlepokemon.weight / 10} kg
              </p>
              <p>
                Ability
                <br />
                {ability}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemondetails;
