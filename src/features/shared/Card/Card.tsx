import React from 'react';
import { Box } from '@mui/material';
import { StyledCard } from './Card.style';
import { NavLink } from 'react-router-dom';
import heart from './pic/heart.png';
import spaceX from './pic/spaceX.png';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { BlueButton } from '../BlueButton/BlueButton';
import { ICard, IFavoriteCard } from '../../CardsHolder/CardsHolder';
import { useQuery, gql } from '@apollo/client';

interface ICardProps {
  currentCard?: ICard
  currentId?: IFavoriteCard
};

const GET_ROCKETS_BY_ID = gql`
  query GetRocket($rocketId: ID!) {
    rocket(id: $rocketId) {
      id
      name
      description
    }
  }
`;

export const Card: React.FC<ICardProps> = ({ currentCard, currentId }) => {

  const { loading, error, data } = useQuery(GET_ROCKETS_BY_ID, {variables: {rocketId: currentId?.id}});

  console.log(loading, error, data)

  return (
    <StyledCard>
      {
        currentCard || currentId
        ?
        <Box component='div' className={`card-wrapper ${currentId?.id ? '' : 'empty-width'}`}>
          <Box component='div' className='card-photo'><img src={currentCard ? currentCard.photo : currentId?.id ? currentId?.photo : ''} alt=''/></Box>
          <Box component='div' className='card-info'>
            <Box component='div' className='card-title'>{ currentCard ? currentCard.title : data?.rocket.name }</Box>
            <Box component='div' className='card-description'>{ currentCard ? currentCard.description : data?.rocket.description }</Box>
          </Box>
          {
            currentCard 
            ? 
            <Box component='div' className='card-button-field'>
              <BlueButton text='BUY'/>
              <FavoriteButton/>
            </Box>
            :
            currentId?.id 
            ?
            <Box component='div' className='card-button-field'>
              <BlueButton text='BUY'/>
              <FavoriteButton/>
            </Box>
            :
            <></>
          }
          
        </Box>
        :
        <></>
      }
      
    </StyledCard>
  );
};