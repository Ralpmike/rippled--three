import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import LoginIcon from '@mui/icons-material/Login';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ width:"60%", boxShadow:"1px 3px 3px 1px gray", border:"none", marginTop:"30px",height:"10vh",}} >
      <InputLabel id="demo-select-small">signup as</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        InputProps={{
          startAdornment: (
              <InputAdornment position="start">
          <LoginIcon />
          </InputAdornment>
      ),
  }}
        placeholder='signup'
        value={age}
        label="signup as"
        onChange={handleChange}
      >
        
        <MenuItem value={20}>Tutor</MenuItem>
        <MenuItem value={30}>Student</MenuItem>
      </Select>
    </FormControl>
  );
}
