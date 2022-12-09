import React, { useState, useEffect } from "react";
import filterPokemon from "./routes/extraFuncs.jsx";
import Pokemon from "./components/pokemon.jsx";
import "./App.css";

function App() {
  const [allPokemon, setAllPokemon] = useState({});
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonWeaknesses, setPokemonWeaknesses] = useState("");

  async function getPokemon() {
    try {
      let res = await fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
      );
      let pokemonArray = await res.json();
      setAllPokemon(pokemonArray);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getPokemon();
  }, []);

  const filteredPokemon = filterPokemon(
    allPokemon,
    pokemonName,
    pokemonType,
    pokemonWeaknesses
  );


  return (
    <div className="App">
      <div className="d-flex justify-content-center align-items-center wrap">
        <div className="header">
          <h1 className="h1">Pokedex</h1>
        </div>
        <div className="pokemonBody">
          <div className="form-control-group">
            <form>
              <label htmlFor="pokemon-name">Name:</label>
              <input
                type="text"
                name="pokemon-name"
                id="pokemon-name"
                value={pokemonName}
                onChange={(event) => {
                  setPokemonName(event.target.value);
                }}
              />
              <label htmlFor="pokemon-type">Type:</label>
              <input
                name="pokemon-type"
                id="pokemon-type"
                type="text"
                value={pokemonType}
                onChange={(event) => {
                  setPokemonType(event.target.value);
                }}
              />
              <label htmlFor="pokemon-weaknesses">Weaknesses:</label>
              <input
                name="pokemon-weaknesses"
                id="pokemon-weaknesses"
                type="text"
                value={pokemonWeaknesses}
                onChange={(event) => {
                  setPokemonWeaknesses(event.target.value);
                }}
              />
            </form>
          </div>
          {filteredPokemon.length > 0
            ? filteredPokemon.map((item) => {
                return (
                  <Pokemon
                    key={item.id}
                    pokemonName={item.name}
                    pokemonNum={item.num}
                    pokemonType={item.type}
                    pokemonWeaknesses={item.weaknesses}
                    imgSrc={item.img}
                  />
                );
              })
            : (allPokemon.pokemon) && allPokemon.pokemon.map((item) => {
                return (
                  <Pokemon
                    key={item.id}
                    pokemonName={item.name}
                    pokemonNum={item.num}
                    pokemonType={item.type}
                    pokemonWeaknesses={item.weaknesses}
                    imgSrc={item.img}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default App;