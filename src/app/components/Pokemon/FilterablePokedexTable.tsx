import { Box, TextField, useMediaQuery } from '@mui/material';
import PokemonTypeSelection from './PokemonTypeSelection';

interface Props {
  searchValue: string;
  selectedType: string;
  handleSearchValue: (v: string) => void;
  handleSelectTypeChange: (v: string) => void;
}

const FilterablePokedexTable = ({
  selectedType,
  searchValue,
  handleSearchValue,
  handleSelectTypeChange,
}: Props) => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Box
      sx={{
        my: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: matches ? 'row' : 'column',
      }}
    >
      <TextField
        id="outlined-required"
        label="Search pokemon"
        value={searchValue}
        fullWidth={matches ? false : true}
        sx={{ mb: matches ? '0px' : '20px' }}
        onChange={(e) => {
          handleSearchValue(e.target.value);
        }}
      />
      <PokemonTypeSelection
        mediaUnder600={matches}
        selectedType={selectedType}
        handleSelectTypeChange={handleSelectTypeChange}
      />
    </Box>
  );
};

export default FilterablePokedexTable;
