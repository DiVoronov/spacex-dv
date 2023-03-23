import React from 'react';
import bannerSpace from '../shared/pic/bannerSpace.png';
import { Box } from '@mui/material';
import { StyledBigBanner } from './BigBanner.style';
import title from './pic/title.png';
import you from './pic/you.png';
import arrowDown from './pic/arrowDown.png';
import circleOne from '../shared/pic/circleOne.png';
import circleEmpty from '../shared/pic/circleEmpty.png';
import { Link } from 'react-scroll';

export const BigBanner = () => {

  const orderCircles = [
    {fill: true, value: <img key={circleOne} src={circleOne} alt=''/>},
    {fill: false, value: <img key={circleEmpty} src={circleEmpty} alt=''/>},
    {fill: false, value: <img key={circleEmpty + 'two'} src={circleEmpty} alt=''/>},
  ];

  return (
    <StyledBigBanner>
      <Box component='div' className='bigBanner-wrapper'>
        <Box component='div' className='bigBanner-dark-background'></Box>
        <img src={bannerSpace} alt=''/>
        <Box component='div' className='bigBanner-text-wrapper'>
          <Box component='div' className='bigBanner-big-text'>
            <Box component='div' className='bigBanner-big-text-title'><img src={title} alt=''/></Box>
            <Box component='div' className='bigBanner-big-text-you'>
              <img src={you} alt=''/>
              <Box component='div' className='bigBanner-switch-circle'>
                <Box>
                  {
                    orderCircles.map( img => img.value )
                  }
                </Box>
              </Box>
            </Box>
          </Box>
          <Box component='div' className='bigBanner-explore-button'>
            <Link to='cards-holder-wrapper' spy smooth duration={800}>
              <Box>Explore tours</Box>
              <img src={arrowDown} alt=''/>
            </Link>
          </Box>
        </Box>
      </Box>
    </StyledBigBanner>
  );
};