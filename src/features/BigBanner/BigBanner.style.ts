import React from 'react';
import styled from 'styled-components';

export const StyledBigBanner = styled.div`
position: relative;

& .bigBanner-wrapper {
  position: relative;

  & .bigBanner-dark-background {
    position: absolute;
    width: 100%;
    height: 99.5%;
    top: 0px;
    left: 0px;
    background: #1E1E1E;
    opacity: 0.48;
    z-index: 0;
  }

  & > img {
    width: 100%;
  }

  & .bigBanner-big-text {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;

    display: flex;
    margin: auto;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;

    & > div {
      max-width: 80%;
      position: relative;


      & .bigBanner-switch-circle {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: -30px;

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

      & > img {
        width: 100%;
      }
    }

    & .bigBanner-big-text-title {
      display: flex;
      align-items: center;
      text-align: center;
      text-transform: uppercase;
      color: #fff;
      height: 58px;
      
    }
  }

  & .bigBanner-explore-button {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;

    & > a {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      gap: 18px;

      & > div {
        width: max-content;
        height: 38px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 32px;
        line-height: 38px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #FFFFFF;
        text-shadow: #000 1px 0px 1px, #000 0px 1px 1px, #000 0px -1px 1px, #000 -1px 0px 1px;
      }

      & img {
        width: 40px;
        height: 40px;
      }
    }
    
  }
}


`;