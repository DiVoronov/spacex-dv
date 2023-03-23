import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledSlider } from './Slider.style';
import { Box } from '@mui/material';
import { ICard } from '../../CardsHolder/CardsHolder';
import { Card } from '../Card/Card';
import prev from './pic/prev.png';
import next from './pic/next.png';
import popularTitle from './pic/popularTitle.png';

interface ICustomSliderProps {
  cards: ICard[]
};

const CustomNextArrow = (props: any) => <Box component='div' className='cards-holder-button-next' {...props}><img src={next} alt=''/></Box>
const CustomPrevArrow = (props: any) => <Box component='div' className='cards-holder-button-prev' {...props}><img src={prev} alt=''/></Box>

export const CustomSlider: React.FC<ICustomSliderProps> = ({ cards }) => {

  const finalCards = [ ...cards, ...cards ];
  
  const settings = {
    className: "center",
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    centerPadding: "60px",
    slidesToShow: 3,
    nextArrow: <CustomNextArrow/>,
    prevArrow: <CustomPrevArrow/>,

  };

  return (
    <StyledSlider>
      <Box component='div' className='cards-holder-top'>
        <Box component='div' className='cards-holder-title'><img src={popularTitle} alt=''/></Box>
      </Box>
      <Slider {...settings}>
        {
          finalCards.map( card => <Card key={card.id} currentCard={card}/>)
        }
      </Slider>
    </StyledSlider>
  );
};