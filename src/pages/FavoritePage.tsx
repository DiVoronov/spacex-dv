import React from 'react';
import { BigBannerFavorite } from '../features/BigBannerFavorite/BigBannerFavorite';
import { Box } from '@mui/material';
import { CardsHolder } from '../features/CardsHolder/CardsHolder';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useQuery, gql } from '@apollo/client';

const GET_ROCKETS_BY_ID = gql`
  query GetRocket($rocketId: ID!) {
    rocket (id: $rocketId) {
      id
      description
      name
    }
  }
`;

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

  // const useParsedRocketsFromFavorite = favorites.map( id => {
  //   const { loading, error, data } = useQuery(GET_ROCKETS_BY_ID, {variables: {rocketId: idd}});

  // });
  
  // console.log(loading, error, data);

  return (
    <Box>
      <BigBannerFavorite/>
      <CardsHolder type='favorite' favoriteCards={favoriteCards()}/>
    </Box>
  );
};