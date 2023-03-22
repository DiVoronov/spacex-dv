import React from 'react';
import bannerMan from '../shared/pic/bannerMan.png';
import { Box } from '@mui/material';
import { StyledBigBannerFavorite } from './BigBannerFavorite.style';
import favourites from './pic/favourites.png';

export const BigBannerFavorite = () => {

  return (
    <StyledBigBannerFavorite>
      <Box component='div' className='bigBannerFavorite-wrapper'>
        <Box component='div' className='bigBannerFavorite-dark-background'></Box>
        <img src={bannerMan} alt=''/>
        <Box component='div' className='bigBannerFavorite-text-wrapper'>
          <img src={favourites} alt=''/>
        </Box>
      </Box>
    </StyledBigBannerFavorite>
  );
};