import React, { useEffect } from 'react';
import { TableBody, TableRow, TableCell, styled } from '@mui/material';
import Image from 'next/image';
import { trpc } from '@/app/_trpc/client';
import { StyledTableCell } from './PokedexTable';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface Props {
  searchText: string;
  handleShowLoader: (v: boolean) => void;
}

const PokemonRow = ({ searchText, handleShowLoader }: Props) => {
  const { isLoading, data } = trpc.getPokemon.useQuery({
    searchBy: searchText,
  });

  useEffect(() => {
    handleShowLoader(isLoading);
  }, [isLoading]);

  if (!data) {
    return null;
  }

  const { items } = data;

  return (
    <TableBody>
      {items &&
        items.map((poke) => (
          <StyledTableRow
            key={poke.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <StyledTableCell scope="row">{poke.name}</StyledTableCell>
            <StyledTableCell align="right">{poke.id}</StyledTableCell>
            <StyledTableCell align="right">
              {poke.type.join(', ')}
            </StyledTableCell>
            <StyledTableCell align="right">
              <Image
                priority
                src={poke.sprite}
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </StyledTableCell>
          </StyledTableRow>
        ))}
    </TableBody>
  );
};

export default PokemonRow;
