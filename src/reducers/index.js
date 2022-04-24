import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";

const reducer = combineReducers({
  pokemon: pokemonReducer,
});

export default reducer;
