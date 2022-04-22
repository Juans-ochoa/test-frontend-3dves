import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getPokemons } from "../services/getPokemons";
import ListPokemon from "./ListPokemon";

export default function ListPokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((data) => setPokemons(data));
  }, []);

  return (
    <Grid container spacing={2}>
      {pokemons.map((pokemon) => (
        <Grid key={pokemon.id} item xs={12} sm={6} md={4} lg={3}>
          <ListPokemon {...pokemon} />
        </Grid>
      ))}
    </Grid>
  );
}
