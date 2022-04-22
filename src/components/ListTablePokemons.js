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

export default function ListTablePokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align='right'>Calories</TableCell>
            <TableCell align='right'>Fat&nbsp;(g)</TableCell>
            <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
            <TableCell align='right'>Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemons.map((pokemon) => (
            <TableRow
              key={pokemon.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component='th' scope='pokemon'>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </TableCell>
              <TableCell component='th' scope='pokemon'>
                {pokemon.name}
              </TableCell>
              <TableCell align='right'>Hola</TableCell>
              <TableCell align='right'>Hola</TableCell>
              <TableCell align='right'>Hola</TableCell>
              <TableCell align='right'>Hola</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
