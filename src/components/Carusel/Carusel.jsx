import React, { useRef } from 'react';
import Slider from 'react-slick';
import Button from '@mui/material/Button';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselWithButtons = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className='home_carusel'>
      <Slider ref={sliderRef} {...settings}>
          <div className="slider__card">
            
          </div>
      </Slider>
      <div>
        <Button onClick={goToPrev} variant="contained">
          Назад
        </Button>
        <Button onClick={goToNext} variant="contained">
          Вперед
        </Button>
      </div>
    </div>
  );
};

export default CarouselWithButtons;
