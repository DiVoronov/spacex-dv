import React from 'react';
import styled from 'styled-components';

export const StyledFavoriteButton = styled.div`
position: relative;
height: 53px;
min-width: 53px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
cursor: pointer;
background: ${ props => props.theme.background };
z-index: 1000;
transition: all 250ms;

& > img {
  height: 19px;
  width: 20px;
}

&::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 0;
  background-color: pink;
  z-index: -1;
  transition: all 250ms
}

&:hover {
  color: #fff;
}

&:hover::before {
  width: 100%;
}

&:active {
  transform: scale(0.9);
}

`;