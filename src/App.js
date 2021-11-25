import React, { useState, useEffect } from "react";
import "./App.css";
import Pagination from "./component/Pagination";
import PokemonLists from "./component/PokemonLists";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loadPokemon] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=120&offset=20"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = pokemons.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  async function createPokemonObject(results) {
    results.forEach(async (pokemon) => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      const data = await res.json();

      setPokemons((list) => [...list, data]);
    });
  }

  useEffect(() => {
    const getAllPokemons = async () => {
      try {
        const res = await fetch(loadPokemon);
        const data = await res.json();
        createPokemonObject(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPokemons();
  }, []);

  return (
    <div className="App">
      <PokemonLists pokemons={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={pokemons.length}
        paginate={paginate}
      />
    </div>
  );
}
export default App;
