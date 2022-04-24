import { SELECT_POKEMON, REMOVE_POKEMON } from "../types";

const INITIAL_STATE = {
  name: "",
  image: "",
  height: "",
  weight: "",
};

export default function pokemonReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_POKEMON:
      return { ...state, ...action.payload };
    case REMOVE_POKEMON:
      return INITIAL_STATE;
    default:
      return INITIAL_STATE;
  }
}
