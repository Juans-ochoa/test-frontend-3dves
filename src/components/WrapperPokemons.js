import { useState } from "react";
import ListGalleryePokemons from "./ListGalleryePokemons";
import ListPokemons from "./ListPokemons";
import ListTablePokemons from "./ListTablePokemons";

export default function WrapperPokemons() {
  const [option, setOption] = useState(0);

  return (
    <>
      <nav className='view__pokemons'>
        <ul>
          <li>
            <button onClick={() => setOption(0)} className='btn_pokemon_view'>
              Table
            </button>
          </li>
          <li>
            <button onClick={() => setOption(1)} className='btn_pokemon_view'>
              Gallery
            </button>
          </li>
          <li>
            <button onClick={() => setOption(2)} className='btn_pokemon_view'>
              List
            </button>
          </li>
        </ul>
      </nav>
      {option === 0 ? (
        <ListTablePokemons />
      ) : option === 1 ? (
        <ListGalleryePokemons />
      ) : (
        <ListPokemons />
      )}
    </>
  );
}
