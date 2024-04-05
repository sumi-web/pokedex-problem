import { Box, TextField } from '@mui/material';
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
      <PokemonTypeSelection
        selectedType={selectedType}
        handleSelectTypeChange={handleSelectTypeChange}
      />
    </Box>
  );
};

export default FilterablePokedexTable;
