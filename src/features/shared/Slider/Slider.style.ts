import React from 'react';
import styled from 'styled-components';

export const StyledSlider = styled.div`
width: 98%;

& .slick-arrow {
  position: absolute;
  top: -60px;
  left: 88%;
  z-index: 900;

  &::before {
    content: none;
  }
  
}

& .slick-next {
  position: absolute;
  /* top: 0px; */
  left: 93%;
}

& .cards-holder-top {
  position: absolute;
  left: 5%;
  top: 8.5%;
}
`;
