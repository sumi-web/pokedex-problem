import React from 'react';
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import PokemonRow from './PokemonRow';

const PokedexTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Sprite</TableCell>
          </TableRow>
        </TableHead>
        <PokemonRow />
      </Table>
    </TableContainer>
  );
};

export default PokedexTable;
