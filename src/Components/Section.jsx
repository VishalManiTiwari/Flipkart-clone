import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const Section = () => {
  return (
    <>
    <div className='relative grid xl:flex md:grid-cols-2 sm:grid-cols-1 flex gap-3 xl:gap-4  mx-2  my-7 w-[97.9%] '>
        <div className='relative p-5 bg-white top-3'>
          <div className='flex p-3  justify-between'>
            <h1 className='font-semibold bottom-4 relative text-[22px]'>Festive Specials</h1>
            <p className='text-[white]  relative ml-5 top-5'>
            <MdKeyboardArrowRight className='relative bg-[blue] ml-5  bottom-7 cursor-pointer w-6 h-6 rounded-full '  />
            </p>
          </div>
              
          <div className=' flex bottom-3 relative gap-3 '>
            <div className='text-center border border-gray-300'>
              <img className='w-[12rem] xl:w-[16rem] xl:h-[15rem] h-[12rem]'  src="https://tse2.mm.bing.net/th?id=OIP.YTqPQMspWKbViExYSOA0-AHaHa&pid=Api&P=0&h=180" alt="" />
              <p className='font-semibold'>DSLR & Mirrorless</p>
              <h1 className='text-[green] font-bold'>Best Pick</h1>
            </div>
            <div className='text-center border border-gray-300'>
                <img className='w-[12rem] xl:w-[16rem] xl:h-[15rem] h-[12rem]'  src="https://tse4.mm.bing.net/th?id=OIP.PmXATMhQjWzG3ehdsBO3egHaHa&pid=Api&P=0&h=180" alt="" />
                 <p className='font-semibold'>Women's Ethnic Sets</p>
                 <h1 className='text-[green] font-bold'>Min. 50% Off</h1>
              </div>
            </div>

            <div className='flex  gap-3 '>
              <div className=' text-center border border-gray-300'>
                <img className='w-[12rem] xl:w-[16rem] xl:h-[15rem] h-[12rem]' src="https://tse3.mm.bing.net/th?id=OIP.mg9RtrM_58XtEndDB_JpEAHaJY&pid=Api&P=0&h=180" alt="" />
                <p className='font-semibold'>Smart Watches</p>
                <h1 className='text-[green] font-bold'>Min. 40% off</h1>
              </div>
              <div className='text-center border border-gray-300'>
                <img className='w-[12rem] xl:w-[16rem] xl:h-[15rem] h-[12rem]' src="https://tse2.mm.bing.net/th?id=OIP.heHUUuT-eaH-7V_RyDf9FAHaHa&pid=Api&P=0&h=180" alt="" />
                <p className='font-semibold'>Wallets</p>
                <h1 className='text-[green] font-bold'>Min. 70% off</h1>
              </div>
            </div>

        </div>

        <div className='relative p-5 bg-white top-3'>
          <div className='flex p-3  justify-between'>
          <h1 className='font-semibold bottom-4 relative text-[22px]'>Travel Essentials For You</h1>
          <p className='text-[white]  relative ml-4 top-5'>
          <MdKeyboardArrowRight className='relative bg-[blue]  bottom-7 cursor-pointer w-6 h-6 rounded-full '  />
          </p>
        </div>
        <div className='flex gap-2 relative bottom-3'>
          <div className='text-center border border-gray-300'>
            <img className='w-[12rem] xl:w-[16rem] xl:h-[15rem] h-[12rem]' src="https://tse2.mm.bing.net/th?id=OIP.5OSB7o8aWsCBuWnWflZlGgHaHZ&pid=Api&P=0&h=180" alt="" />
            <p className='font-semibold'>Men's And Womens S...</p>
            <h1 className='text-[green] font-bold'>Min 50% off</h1>
          </div>
          <div className='text-center border border-gray-300'>
             <img className='w-[12rem] xl:w-[16rem] xl:h-[15rem] h-[12rem]'  src="https://tse3.mm.bing.net/th?id=OIP.ioSe01yfm5SFICnA4SEWRAHaHa&pid=Api&P=0&h=180" alt="" />
             <p className='font-semibold'>Mens Slippers </p>
             <h1 className='text-[green] font-bold'>Min. 70% off</h1>
          </div>
        </div>
        <div className='flex gap-2 border border-gray-300'>
          <div className='text-center border border-gray-300'>
            <img className='w-[12rem] xl:w-[16rem] xl:h-[15rem] h-[12rem]' src="https://tse3.mm.bing.net/th?id=OIP.t5oDgAlMq4-q3GeniKDxngHaHe&pid=Api&P=0&h=180" alt="" />
            <p className='font-semibold'>Torches</p>
            <h1 className='text-[green] font-bold'>Special Offers</h1>
          </div>
          <div className='text-center border border-gray-300'>
            <img className='w-[12rem] xl:w-[16rem] xl:h-[15rem] h-[12rem]'  src="https://tse1.mm.bing.net/th?id=OIP.CGogxrdU40aBfc__Hw3EAAHaHa&pid=Api&P=0&h=180" alt="" />
            <p className='font-semibold'>Mens Casual Shoes</p>
            <h1 className='text-[green] font-bold'>Min. 70% off</h1>
          </div>
        </div>
        </div>
        <div className='xl:flex hidden'>
          <img className='relative mr-2 top-3 w-[35rem] h-[]'
           src="https://cdn.pixabay.com/photo/2015/10/31/12/41/sale-1015710_640.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Section

