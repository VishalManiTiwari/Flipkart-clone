import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Hero = () => {
  const imgData = [
    {
      url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/076cd2a048e45a3a.jpg?q=20',
    },
    {
      url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/c096498cafe9027c.png?q=20',
    },
    {
      url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/88a387d43cef39e5.png?q=20',
    },
    {
      url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5ffddf1e79dc4aeb.jpg?q=20',
    },
    {
      url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/595e24f4e884cec8.jpg?q=20',
    },
    {
      url: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/c096498cafe9027c.png?q=20',
    },
  ];

  const [slider, setSlider] = useState(0);

  const handlePlus = () => {
    setSlider((prevSlider) => (prevSlider === imgData.length - 1 ? 0 : prevSlider + 1));
  };

  const handleMinus = () => {
    setSlider((prevSlider) => (prevSlider === 0 ? imgData.length - 1 : prevSlider - 1));
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, 
  };

  return (
    <>
      <div className='relative w-[98%] top-4 mx-auto'>
        <Slider {...settings}>
          {imgData.map((item, i) => (
            <div key={i} className={`${slider === i ? "block" : "hidden"}`}>
              <img src={item.url} alt="" />
            </div>
          ))}
        </Slider>
      </div>
      {/* <div className='2xl:flex hidden  justify-between w-full px-3 text-white absolute top-[40%]'>
        <FaAngleLeft onClick={handleMinus} size={30} 
          className='bg-[white] h-8 xl:my-9 py-1 rounded cursor-pointer text-[gray]' />
        <FaAngleRight onClick={handlePlus} size={30} 
          className='bg-[white] xl:my-9 py-1 rounded cursor-pointer text-[gray]' />
      </div> */}
      <div className='relative mx-2 top-10'>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/140/image/be895694c0ed175b.jpg?q=20" alt="" />
      </div>
    </>
  );
};

export default Hero;


