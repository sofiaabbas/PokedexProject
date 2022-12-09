export default function filterPokemon(
    allPokemon = [],
    name = "",
    type = "",
    weakness = ""
  ) {
    let filteredPokemon = [];
  
    if (allPokemon.pokemon) {
  
  
      filteredPokemon = allPokemon.pokemon;
  
      if (name){
          filteredPokemon = filteredPokemon.filter((pokemon) => {
              return pokemon.name === name;
          });
      }
  
      if (type){
          filteredPokemon = filteredPokemon.filter((pokemon) => {
              return pokemon.type.includes(type);
           });
      }
  
      if (weakness){
          filteredPokemon = filteredPokemon.filter((pokemon) => {
              return pokemon.weaknesses.includes(weakness);
          });
      }
  
      return filteredPokemon;
    }
  
    return filteredPokemon;
  }