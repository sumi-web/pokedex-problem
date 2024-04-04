import React from 'react';
import { TableBody, TableRow, TableCell } from '@mui/material';
import Image from 'next/image';

const pokemons = [
  {
    id: 1,
    name: 'Bulbasur',
    type: 'grass',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: 2,
    name: 'Venusaur',
    type: 'grass, poison',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  },
];

const PokemonRow = () => {
  return (
    <TableBody>
      {pokemons.map((poke) => (
        <TableRow
          key={poke.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {poke.id}
          </TableCell>
          <TableCell align="right">{poke.name}</TableCell>
          <TableCell align="right">{poke.type}</TableCell>
          <TableCell align="right">
            <Image
              priority
              src={poke.sprite}
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default PokemonRow;
