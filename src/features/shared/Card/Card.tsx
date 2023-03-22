import React from 'react';
import { Box } from '@mui/material';
import { StyledCard } from './Card.style';
import { NavLink } from 'react-router-dom';
import heart from './pic/heart.png';
import spaceX from './pic/spaceX.png';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { BlueButton } from '../BlueButton/BlueButton';
import { ICard } from '../../CardsHolder/CardsHolder';

interface ICardProps {
  currentCard: ICard
}
export const Card: React.FC<ICardProps> = ({ currentCard }) => {

  return (
    <StyledCard>
      <Box component='div' className='card-wrapper'>
        <Box component='div' className='card-photo'><img src={currentCard.photo} alt=''/></Box>
        <Box component='div' className='card-info'>
          <Box component='div' className='card-title'>{ currentCard.title }</Box>
          <Box component='div' className='card-description'>{ currentCard.description }</Box>
        </Box>
        <Box component='div' className='card-button-field'>
          <BlueButton text='BUY'/>
          <FavoriteButton/>
        </Box>
      </Box>
    </StyledCard>
  );
};