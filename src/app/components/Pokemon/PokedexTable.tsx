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
import ScreenLoader from '../common/ScreenLoader';
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
}

const PokedexTable = ({ searchText }: Props) => {
  const [showLoader, setShowLoader] = useState(false);

  console.log('showLoader', showLoader);

  const handleShowLoader = (value: boolean) => {
    setShowLoader(value);
  };

  return (
    <>
      {showLoader && <ScreenLoader />}
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
          <PokemonRow searchText={searchText} handleShowLoader={handleShowLoader} />
        </Table>
      </TableContainer>
    </>
  );
};

export default PokedexTable;
