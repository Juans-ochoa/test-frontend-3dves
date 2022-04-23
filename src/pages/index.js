import { Grid } from "@mui/material";
import Head from "next/head";
import PokemonProfile from "../components/PokemonProfile";
import WrapperPokemons from "../components/WrapperPokemons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokemons</title>
        <meta name='description' content='Relod to pssx' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Grid container spacing={2}>
        <Grid item sm={12} md={9}>
          <WrapperPokemons />
        </Grid>
        <Grid item sm={12} md={3}>
          <aside style={{ width: "100%", textAlign: "center" }}>
            <PokemonProfile />
          </aside>
        </Grid>
      </Grid>
    </div>
  );
}
