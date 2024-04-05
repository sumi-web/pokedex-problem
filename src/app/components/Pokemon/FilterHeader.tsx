import { Box, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SelectBox from '../common/Select';

interface Props {
  searchValue: string;
  handleSearchValue: (v: string) => void;
}

const FilterHeader = ({ searchValue, handleSearchValue }: Props) => {
  const [pokemonTypeList, setPokemonList] = useState([]);

  useEffect(() => {
    (async () => {
      await fetch('https://pokeapi.co/api/v2/type/')
        .then((res) => res.json())
        .then((json) => {
          console.log('json found', json);
        })
        .catch((e) => {
          console.log('err in fetching pokemon types', e);
        });
    })();
  }, []);

  return (
    <Box
      sx={{
        my: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <TextField
        id="outlined-required"
        label="Search pokemon"
        value={searchValue}
        sx={{}}
        onChange={(e) => {
          handleSearchValue(e.target.value);
        }}
      />
      <SelectBox />
    </Box>
  );
};

export default FilterHeader;
