import React from 'react';
import styled from 'styled-components';

export const StyledCard = styled.div`
position: relative;
width: 28%;
height: 572px;
border: 1px solid #D3EAFF;
max-width: 380px;

& .card-wrapper {
  /* width: 411px;
  height: 572px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  overflow: hidden;
  max-width: 411px;

  & .card-photo {
    /* width: 100%; */
    overflow: hidden;

    & > img {
      /* width: 380px; */
      height: 250px;

    }
  }

  & .card-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    gap: 16px;

    height: 103px;


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
    }

    & .card-description {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 29px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #556B84;
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