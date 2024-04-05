import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface Props {
  selectedType: string;
  list: string[];
  handleSelectTypeChange: (v: string) => void;
}

export default function SelectBox({
  list,
  selectedType,
  handleSelectTypeChange,
}: Props) {
  console.log('selectedType', selectedType);

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel shrink id="demo-simple-select-label">
          Select type
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          value={selectedType}
          label="Select type"
          onChange={(e) => {
            handleSelectTypeChange(e.target.value);
          }}
        >
          <MenuItem value={''}>-all-</MenuItem>
          {list.map((option, i) => (
            <MenuItem key={option + i} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
