import React from 'react';
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
  id: number
}
export const CardsHolder = () => {

  const GET_ALL_ROCKETS = gql`
  query GetAllRockets {
    rockets {
      id
      description
      name
    }
  }
`;

  const { loading, error, data } = useQuery(GET_ALL_ROCKETS);

  console.log(loading, error, data)

  const cards: ICard[] = [
    {photo: bannerSpace, title: 'title 1', description: 'description 1', id: 1},
    {photo: bannerBlue, title: 'title 2', description: 'description 2', id: 2},
    {photo: bannerMan, title: 'title 3', description: 'description 3', id: 3},
  ];

  const orderBlackCircles = [
    {fill: true, value: <img key={circleBlackOne} src={circleBlackOne} alt=''/>},
    {fill: false, value: <img key={circleBlackEmpty} src={circleBlackEmpty} alt=''/>},
    {fill: false, value: <img key={circleBlackEmpty + 'two'} src={circleBlackEmpty} alt=''/>},
  ];

  return (
    <StyledCardsHolder>
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
              orderBlackCircles.map( img => img.value )
            }
          </Box>
        </Box>
      </Box>
    </StyledCardsHolder>
  );
};