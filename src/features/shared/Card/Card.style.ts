import React from 'react';
import styled from 'styled-components';

export const StyledCard = styled.div`
position: relative;
height: 572px;
border: 1px solid #D3EAFF;
max-width: 380px;
margin: 0px .5rem;

& .empty-width {
  width: 350px;
}

& .card-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  overflow: hidden;
  max-width: 411px;

  & .card-photo {
    overflow: hidden;

    & > img {
      height: 250px;
    }
  }

  & .card-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 2rem;
    gap: 16px;
    justify-content: center;
    height: 30%;

    & .card-title {
      font-family: 'Syne';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      display: flex;
      align-items: center;
      text-align: center;
      text-transform: uppercase;
      color: #1E1E1E;
      margin: auto;
    }

    & .card-description {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 29px;
      display: flex;
      text-align: justify;
      color: #556B84;
      max-height: 300px;
      overflow: hidden;
    }
  }

  & .card-button-field {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    gap: 16px;
    width: 100%;

  }
}



`;