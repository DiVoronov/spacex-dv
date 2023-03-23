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

  & .cards-holder-favorite-top {
    display: flex;
    width: 1170px;
    justify-content: flex-end;

    & .cards-holder-favorite-title{
      font-family: 'Lato';
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 29px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #556B84;
      cursor: pointer;
      opacity: .7;
      transition: all .3s;
      padding: .5rem;

      &:hover {
        transform: scale(1.07);
        opacity: 1;
      } 
    }

    & .cards-holder-buttons {

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px;
      gap: 10px;
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