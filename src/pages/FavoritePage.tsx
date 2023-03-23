import React from 'react';
import { BigBannerFavorite } from '../features/BigBannerFavorite/BigBannerFavorite';
import { Box } from '@mui/material';
import { CardsHolder } from '../features/CardsHolder/CardsHolder';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export const FavoritePage = () => {

  const favorites = useSelector((state: RootState) => state.favorite);

  const favoriteCards = () => {
    if (favorites.length === 3) {
      return favorites;
    } else if (favorites.length === 2) {
      return [ ...favorites, '' ];
    } else if (favorites.length === 1) {
      return [ ...favorites, '', '' ];
    } else {
      return [ '', '', '' ];
    };
  };

  return (
    <Box>
      <BigBannerFavorite/>
      <CardsHolder type='favorite' favoriteCards={favoriteCards()}/>
    </Box>
  );
};