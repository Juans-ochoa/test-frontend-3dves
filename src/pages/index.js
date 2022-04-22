import Head from "next/head";
import WrapperPokemons from "../components/WrapperPokemons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokemons</title>
        <meta name='description' content='Relod to pssx' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <WrapperPokemons />
    </div>
  );
}
