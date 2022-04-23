import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getPokemons } from "../services/getPokemons";
import Spinner from "./global/Spinner";
import ListPokemon from "./ListPokemon";

export default function ListPokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    getPokemons().then((data) => {
      setLoader(false);
      setPokemons(data);
    });
  }, []);

  return (
    <>
      {loader && <Spinner />}
      <Grid container spacing={2}>
        {pokemons.map((pokemon) => (
          <Grid key={pokemon.id} item xs={12} sm={6} md={4}>
            <ListPokemon {...pokemon} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
