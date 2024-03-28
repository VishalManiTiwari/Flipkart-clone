import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='shadow flex justify-center font-semibold mx-3 bg-white 2xl:px-13 gap-12 mt-3 p-6 rounded '>
        <Link to='/'>
        <div className='cursor-pointer'>
          <img className='relative md:w-[60px] 2xl:bottom-2 2xl:w-[70]' 
          src="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100" alt="" />
          <p>Grocery</p>
        </div>
        </Link>
        <Link to='/mobile'>
        <div className='cursor-pointer'>
            <img className='relative md:w-[60px] 2xl:bottom-2 2xl:w-[70]'
             src="https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" alt="" />
            <p>Mobiles</p>
        </div>
        </Link>
        <div className='cursor-pointer'>
            <img className='relative md:w-[60px] 2xl:bottom-2 2xl:w-[70]'
             src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />
            <p className='flex'>Fashion <span>
              <FaAngleDown className='relative top-[6px]' />
              </span></p>
        </div>
        <div className='cursor-pointer'>
            <img className='relative md:w-[60px] ml-4 2xl:bottom-2 2xl:w-[70]' 
            src="https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100" alt="" />
            <p className='flex'>Electronics <span><FaAngleDown className='relative top-[6px]' /></span></p>
        </div>
        <div className='cursor-pointer'>
        <img className='relative md:w-[60px] xl:ml-8 2xl:bottom-2 2xl:w-[70]'
         src="https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100" alt="" />
            <p className='flex'>
             <span className='md:flex 2xl:hidden'>Home & <br /> Furniture</span>
             <span className='2xl:flex hidden'>Home & Furniture</span> 
             <span><FaAngleDown className='relative xl:top-[6px] md:top-[16px]' /></span></p>
        </div>
        <div className='cursor-pointer'>
           <img className='relative md:w-[60px] ml-3 2xl:bottom-2 2xl:w-[70]'
            src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100" alt="" />
           <p>Appliances</p> 
        </div>
        <div className='flex 2xl:flex hidden gap-10'>
            <div className='cursor-pointer'>
                <img className='relative md:w-[60px] 2xl:bottom-2 2xl:w-[70]'
                 src="https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100" alt="" />
                <p>Travels</p>
            </div>
            <div className='cursor-pointer'>
                <img className='relative md:w-[60px] ml-8 2xl:bottom-2 2xl:w-[70]' 
                src="https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100" alt="" />
                <p>Beauty,Toys & More</p>
            </div>
            <div className='cursor-pointer'>
                <img className='relative md:w-[60px] ml-8 2xl:bottom-2 2xl:w-[70]'
                 src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100" alt="" />
                <p>Two Wheelers</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
