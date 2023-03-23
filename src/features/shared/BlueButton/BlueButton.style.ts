import React from 'react';
import styled from 'styled-components';

export const StyledBlueButton = styled.div`
position: relative;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
background: #D3EAFF;
color: #000;
padding: 12px 12px;

font-family: 'Syne';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;

display: flex;
align-items: center;
text-align: center;
text-transform: uppercase;
overflow: hidden;
white-space: nowrap;
z-index: 1000;

cursor: pointer;
transition: all 250ms;

&::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 0;
  background-color: #000;
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