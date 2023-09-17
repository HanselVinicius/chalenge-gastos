import React from 'react';
import { FormControl, Grid, InputLabel, NativeSelect, Typography, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function OrderFilter() {
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
              <NativeSelect id="select1">
                <option value={1}>Maior</option>
                <option value={2}>Menor</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item>
            <TextField
              id="search"
              label="Filtrar Categoria"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
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
