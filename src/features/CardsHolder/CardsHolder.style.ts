import React from 'react';
import styled from 'styled-components';

export const StyledCardsHolder = styled.div`
position: relative;
width: 100%;

& .cards-holder-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 9rem 3rem;
  gap: 2rem;

  /* & .cards-holder-field {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  } */

  & .cards-holder-top {
    display: flex;
    width: 1025px;
    justify-content: space-between;

    & .cards-holder-title {
      width: 465px;
      height: 38px;

      font-family: 'Syne';
      font-style: normal;
      font-weight: 800;
      font-size: 32px;
      line-height: 38px;
      display: flex;
      align-items: center;
      text-align: center;
      text-transform: uppercase;

      color: #1E1E1E;
    }

    & .cards-holder-buttons {

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px;
      gap: 10px;

      /* width: 44px;
      height: 44px; */
    }

    
  }
  
  & .cards-holder-switch-circle {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;

    & > div {
      display: flex;
      gap: 9px;
    }
  }
}



`;