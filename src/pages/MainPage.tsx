import React from 'react';
import { Box } from '@mui/material';
import { BigBanner } from '../features/BigBanner/BigBanner';
import { CardsHolder } from '../features/CardsHolder/CardsHolder';

export const MainPage = () => {
  return (
    <Box>
      <BigBanner/>
      <CardsHolder type='main'/>
    </Box>
  );
};