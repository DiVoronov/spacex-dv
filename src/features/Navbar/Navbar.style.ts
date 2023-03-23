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
    transition: border .4s, transform .4s;

    &:hover {
      border-bottom: 1px solid #fff;
      transform: scale(1.1);
    }

    &:active {
      border-bottom: 1px solid #fff;
    }
  }
}
& .navbar-list-favorite-sign {
  display: flex;
  gap: 12px;
  width: 220px;
}
`;