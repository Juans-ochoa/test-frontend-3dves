import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getPokemons } from "../services/getPokemons";
import CardPokemon from "./CardPokemon";
import Spinner from "./global/Spinner";

export default function ListGalleryePokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    getPokemons().then((data) => {
      setLoader(false);
      setPokemons(data);
    });
  }, []);

  console.log(loader);

  return (
    <>
      {loader && <Spinner />}
      <Grid container spacing={2}>
        {pokemons.map((pokemon) => (
          <Grid key={pokemon.id} item xs={12} sm={6} md={4}>
            <CardPokemon {...pokemon} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
