import React from 'react';
import { Box } from '@mui/material';
import { StyledNavbar } from './Navbar.style';
import { NavLink } from 'react-router-dom';
import spaceX from './pic/spaceX.png';
import { FavoriteButton } from '../shared/FavoriteButton/FavoriteButton';
import { BlueButton } from '../shared/BlueButton/BlueButton';

export const Navbar = () => {

  const centerNavList = [
    {link: '/', value: 'HOME'},
    {link: '/', value: 'TOURS'},
    {link: '/', value: 'ABOUT'},
    {link: '/', value: 'HELP'},
  ];

  return (
    <StyledNavbar>
      <Box component='div' className='navbar-wrapper'>
        <Box component='div' className='navbar-logo'><NavLink to='/'><img src={spaceX} alt=''/></NavLink></Box>
        <Box component='div' className='navbar-center-nav-list'>
          {
            centerNavList.map( link => <NavLink key={link.value} to={link.link}>{link.value}</NavLink> )
          }          
        </Box>
        <Box component='div' className='navbar-list-favorite-sign'>
          <NavLink to='/favorite'><FavoriteButton role='favorite'/></NavLink>
          <BlueButton text='SIGN IN'/>
        </Box>
      </Box>
    </StyledNavbar>
  );
};