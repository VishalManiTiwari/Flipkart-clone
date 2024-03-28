import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineGift } from "react-icons/ai";
import { PiDotsThreeVertical } from "react-icons/pi";

const PreNav = () => {
  return (
    <>
      <div className='sticky top-0 z-10'> 
        <div className='flex p-3 shadow-sm  bg-white justify-center gap-5 2xl:justify-between text-center items-center'>
        <div className=''>
           <img className='2xl:w-[12rem] cursor-pointer pr-6' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />
        </div>
         
        <div className='flex'>
            <button className='flex bg-gray-200 rounded'>
           <IoSearchOutline className='relative my-2 ml-2 mt-auto text-[22px] justify-center' />
           <input className='md:w-[16rem]  2xl:w-[47rem] 2xl:mx-30 text-[18px] outline-none px-2 bg-gray-200 rounded h-[39px]'
            type="text" placeholder='Search for products, Brands...' />
            </button>
        </div>
        <div className='flex'>
          <button className='flex gap-2.5 hover:bg-blue-700 hover:text-white px-2.5 py-2 rounded'>
           <FaRegUserCircle className='text-[22px] relative top-0.5' />
           <p className='text-[17px] text-bold'>Login</p>
          </button>
        </div>
        <div className='flex gap-3'>
        <BsCart3 className='text-[22px] cursor-pointer' />
        <p className='xl:flex hidden text-[18px]'>Cart</p>
        </div>
        <div className='flex gap-2'>
        <AiOutlineGift  className='text-[24px] cursor-pointer gap-2'/>
        <p className='xl:flex hidden text-[18px]'>Became a Seller</p>
        </div>
        <div >
        
        </div>
        <div className='relative'>
        <PiDotsThreeVertical className=' cursor-pointer text-[22px]' />
        </div>
        </div>
      </div>
    </>
  )
}

export default PreNav
