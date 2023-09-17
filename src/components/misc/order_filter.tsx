import React, { useState } from 'react';
import { FormControl, Grid, InputLabel, NativeSelect, Typography, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function OrderFilter({ onOrderChange, onSearch }) {
  const [orderOption, setOrderOption] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  const handleOrderChange = (event) => {
    const selectedOption = event.target.value;
    setOrderOption(selectedOption);
    onOrderChange(selectedOption);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='mt-4 justify-center'>
      <div className='w-full px-4'>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="h4">Panorama Geral de Gastos</Typography>
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel htmlFor="select1"> Valor</InputLabel>
              <NativeSelect value={orderOption} onChange={handleOrderChange} id="select1">
                <option  value={1}>Maior</option>
                <option value={2}>Menor</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item>
            <TextField
              id="search"
              label="Filtrar"
              variant="outlined"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyPress}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" onClick={handleSearch}>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
