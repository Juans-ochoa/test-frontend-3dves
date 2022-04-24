import { REMOVE_POKEMON, SELECT_POKEMON } from "../types";

export const selectPokemon = (pokemon) => ({
  type: SELECT_POKEMON,
  payload: pokemon,
});

export const removePokemon = () => ({
  type: REMOVE_POKEMON,
});
