import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getPokemons } from "../services/getPokemons";
import Spinner from "./global/Spinner";

export default function ListTablePokemons() {
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
      {!loader && (
        <TableContainer component={Paper}>
          <Table stickyHeader sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Weight</TableCell>
                <TableCell>Height</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pokemons.map((pokemon) => (
                <TableRow
                  key={pokemon.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align='right'>{pokemon.id}</TableCell>
                  <TableCell component='th' scope='pokemon'>
                    <img
                      src={pokemon.image}
                      width='50'
                      height='50'
                      alt={pokemon.name}
                    />
                  </TableCell>
                  <TableCell component='th' scope='pokemon'>
                    {pokemon.name}
                  </TableCell>
                  <TableCell align='right'>{pokemon.weight}</TableCell>
                  <TableCell align='right'>{pokemon.height}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
