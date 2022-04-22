import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getPokemons } from "../services/getPokemons";
import pokemonImage from "../assets/images/pokemon.jpg";

export default function ListTablePokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);
  return (
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
  );
}
