import React from 'react';
import styled from 'styled-components';

export const StyledBigBannerFavorite = styled.div`
position: relative;
height: 400px;
overflow: hidden;

& .bigBannerFavorite-wrapper {
  position: relative;

  & .bigBannerFavorite-dark-background {
    position: absolute;
    width: 100%;
    height: 99.5%;
    top: 0px;
    left: 0px;
    background: #1E1E1E;
    opacity: 0.48;
    z-index: 0;
  }

  & .bigBannerFavorite-text-wrapper {
    position: absolute;
    width: 100%;
    height: 60%;
    top: 0px;
    left: 0px;

    display: flex;
    margin: auto;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;

    & > img {
      width: 413px;
    }
  }
}


`;