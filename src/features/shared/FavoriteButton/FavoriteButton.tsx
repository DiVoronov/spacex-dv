import React from 'react';
import { Box } from '@mui/material';
import { StyledFavoriteButton } from './FavoriteButton.style';
import { NavLink } from 'react-router-dom';
import heart from './pic/heart.png';
import spaceX from './pic/spaceX.png';

export const FavoriteButton = () => {

  return (
    <StyledFavoriteButton>
      <img src={heart} alt=''/>
    </StyledFavoriteButton>
  );
};