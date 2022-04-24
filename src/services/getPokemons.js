let url = "https://pokeapi.co/api/v2/pokemon?limit=200";

export async function getPokemons() {
  let pokemons = [];

  try {
    const res = await fetch(url),
      data = await res.json();
    for (let i = 0; i < data.results.length; i++) {
      const res = await fetch(data.results[i].url);
      const pokemon = await res.json();
      pokemons = [...pokemons, pokemon];
    }
  } catch (err) {}

  return pokemons.map((el) => ({
    id: el.id,
    name: el.name,
    image: el.sprites.other.dream_world.front_default,
    height: el.height,
    weight: el.weight,
  }));
}
