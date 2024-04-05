'use client';
import React, { useState } from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import PokemonRow from './PokemonRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

interface Props {
  searchText: string;
  selectType: string;
}

const PokedexTable = ({ searchText, selectType }: Props) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Id</StyledTableCell>
              <StyledTableCell align="right">Type</StyledTableCell>
              <StyledTableCell align="right">Sprite</StyledTableCell>
            </TableRow>
          </TableHead>
          <PokemonRow searchText={searchText} selectType={selectType} />
        </Table>
      </TableContainer>
    </>
  );
};

export default PokedexTable;
