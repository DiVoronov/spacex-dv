import React, { useState, useEffect } from 'react';
import bannerSpace from '../shared/pic/bannerSpace.png';
import bannerBlue from '../shared/pic/bannerBlue.png';
import bannerMan from '../shared/pic/bannerMan.png';
import { Box } from '@mui/material';
import { StyledCardsHolder } from './CardsHolder.style';
import circleBlackOne from './pic/circleBlackFill.png';
import circleBlackEmpty from './pic/circleBlackEmpty.png';
import { Card } from '../shared/Card/Card';
import prev from './pic/prev.png';
import next from './pic/next.png';
import popularTitle from './pic/popularTitle.png';

import { useQuery, gql } from '@apollo/client';

export interface ICard {
  photo: string
  title: string
  description: string
  id: string
};

export interface IFavoriteCard {
  photo: string
  id: string
};

const GET_ALL_ROCKETS = gql`
  query GetAllRockets {
    rockets {
      id
      description
      name
    }
  }
`;

interface ICardsHolderProps {
  type: 'main' | 'favorite'
  favoriteCards?: string[]
}

export const CardsHolder: React.FC<ICardsHolderProps> = ({ type, favoriteCards }) => {

  const { loading, error, data } = useQuery(GET_ALL_ROCKETS);

  const cards: ICard[] = loading ? [
    {photo: bannerSpace, title: 'Loading title 1...', description: 'Loading description 1...', id: 1},
    {photo: bannerBlue, title: 'Loading title 2...', description: 'Loading description 2...', id: 2},
    {photo: bannerMan, title: 'Loading title 3...', description: 'Loading description 3...', id: 3},
  ] : error ? [
    {photo: bannerSpace, title: 'title 1', description: 'description 1', id: 1},
    {photo: bannerBlue, title: 'title 2', description: 'description 2', id: 2},
    {photo: bannerMan, title: 'title 3', description: 'description 3', id: 3},
  ] : [
    {photo: bannerSpace, title: data.rockets[0].name, description: data.rockets[0].description, id: data.rockets[0].id},
    {photo: bannerBlue, title: data.rockets[1].name, description: data.rockets[1].description, id: data.rockets[1].id},
    {photo: bannerMan, title: data.rockets[2].name, description: data.rockets[2].description, id: data.rockets[2].id},
  ];


  const orderBlackCircles = [
    {fill: true, value: <img key={circleBlackOne} src={circleBlackOne} alt=''/>},
    {fill: false, value: <img key={circleBlackEmpty} src={circleBlackEmpty} alt=''/>},
    {fill: false, value: <img key={circleBlackEmpty + 'two'} src={circleBlackEmpty} alt=''/>},
  ];

  const favoriteCardsWithPhoto = favoriteCards && [
    {photo: bannerSpace, id: favoriteCards[0]},
    {photo: bannerBlue, id: favoriteCards[1]},
    {photo: bannerMan, id: favoriteCards[2]},
  ];

  return (
    <StyledCardsHolder>
      {
        type === 'main'
        ?
        <Box component='div' className='cards-holder-wrapper'>
          <Box component='div' className='cards-holder-top'>
            <Box component='div' className='cards-holder-title'><img src={popularTitle} alt=''/></Box>
            <Box component='div' className='cards-holder-buttons'>
              <Box component='div' className='cards-holder-button-prev'><img src={prev} alt=''/></Box>
              <Box component='div' className='cards-holder-button-next'><img src={next} alt=''/></Box>
            </Box>
          </Box>
          <Box component='div' className='cards-holder-field'>
            {
              cards.map( card => <Card key={card.id} currentCard={card}/>)
            }
          </Box>
          <Box component='div' className='cards-holder-switch-circle'>
            <Box>
              {
                data && orderBlackCircles.map( img => img.value )
              }
            </Box>
          </Box>
        </Box>
        :
        <Box component='div' className='cards-holder-wrapper'>
          <Box component='div' className='cards-holder-favorite-top'>
            <Box component='div' className='cards-holder-title'>Clear all</Box>
          </Box>
          <Box component='div' className='cards-holder-field'>
            {
              favoriteCards && favoriteCardsWithPhoto?.map( card => <Card key={card.photo} currentId={card}/>)
            }
          </Box>
        </Box>
      }
      
    </StyledCardsHolder>
  );
};