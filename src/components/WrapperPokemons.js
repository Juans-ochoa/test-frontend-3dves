import { useEffect, useState } from "react";
import ListTablePokemons from "./ListTablePokemons";

export default function WrapperPokemons() {
  const [option, setOption] = useState(0);

  return <>{option === 0 ? <ListTablePokemons /> : null}</>;
}
