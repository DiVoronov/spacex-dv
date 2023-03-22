import React from 'react';
import styled from 'styled-components';

export const StyledFavoriteButton = styled.div`
height: 53px;
min-width: 53px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
/* gap: 10px; */

background: #ECECEC;
& > img {
  height: 19px;
  width: 20px;
}

`;