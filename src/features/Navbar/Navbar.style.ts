import React from 'react';
import styled from 'styled-components';

export const StyledNavbar = styled.div`
position: relative;
z-index: 1000;

& .navbar-wrapper {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  display: flex;
  padding: 13px 80px;
  justify-content: space-between;
  align-items: center;
  background: rgba(30, 30, 30, 0.48);
}

& .navbar-center-nav-list {
  display: flex;
  align-items: center;
  text-align: center;
  gap: 32px;

  & > a {
    text-decoration: none;
    color: #FFF;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;

    &:active {
      border-bottom: 1px solid #fff;
    }
  }

  
}
& .navbar-list-favorite-sign {
  display: flex;
  gap: 12px;
  /* height: 53px; */
  width: 220px;

  /* & .navbar-favorite {
    width: 53px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 10px;

    background: #ECECEC;
    & > img {
      height: 19px;
      width: 20px;
    }
  } */

  /* & .navbar-sign-in {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 163px;
    background: #D3EAFF;
    padding: 12px 0px;

    font-family: 'Syne';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    color: #000000;

  } */
}
`;