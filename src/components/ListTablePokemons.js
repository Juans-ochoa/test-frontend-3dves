import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectPokemon } from "../actions/pokemonActions";
import { getPokemons } from "../services/getPokemons";
import Spinner from "./global/Spinner";

export default function ListTablePokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

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
      {!loader && (
        <TableContainer component={Paper}>
          <Table stickyHeader sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Id</TableCell>
                <TableCell align='center'>Image</TableCell>
                <TableCell align='center'>Name</TableCell>
                <TableCell align='center'>Weight</TableCell>
                <TableCell align='center'>Height</TableCell>
                <TableCell align='center'>Select Pokemon</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pokemons.map((pokemon) => (
                <TableRow
                  key={pokemon.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align='center'>{pokemon.id}</TableCell>
                  <TableCell align='center' scope='pokemon'>
                    <img
                      src={pokemon.image}
                      width='50'
                      height='50'
                      alt={pokemon.name}
                    />
                  </TableCell>
                  <TableCell align='center' scope='pokemon'>
                    {pokemon.name}
                  </TableCell>
                  <TableCell align='center'>{pokemon.weight}</TableCell>
                  <TableCell align='center'>{pokemon.height}</TableCell>
                  <TableCell align='center'>
                    <Button
                      variant='contained'
                      onClick={() => dispatch(selectPokemon(pokemon))}>
                      Seelct
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
