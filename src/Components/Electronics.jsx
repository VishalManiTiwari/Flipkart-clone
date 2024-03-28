import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { data } from './Data/data';


const Electronics = () => {
    
  const myData = [
    {
        img: 'https://tse3.mm.bing.net/th?id=OIP.oikiPckNRPmmaylsafDQVQHaHa&pid=Api&P=0&h=180',
        Name: 'Printers',
        Price: 3999,
    },
    {
        img: 'https://tse4.mm.bing.net/th?id=OIP.Xgu2w7528qHso0_FyCRsfgHaHa&pid=Api&P=0&h=180',
        Name: 'Cameras',
        Price: 5999,
    },
    {
        img: 'https://tse4.mm.bing.net/th?id=OIP.fNReBEV8veW1CNwryHSv4wHaEM&pid=Api&P=0&h=180',
        Name: 'Projectors best qualities product...',
        Price: 9999,
    },
    {
        img: 'https://tse2.mm.bing.net/th?id=OIP.sHpY02sPxbw4vkNYBjChjAHaEK&pid=Api&P=0&h=180',
        Name: 'Keyboards with backlit HP...',
        Price:299, 
    },
    {
        img: 'https://tse4.mm.bing.net/th?id=OIP.pCr5ZynnznhO8rw7IXkYaQHaHa&pid=Api&P=0&h=180',
        Name: 'Monitors',
        Price: 8279, 
    },
    {
        img: 'https://tse1.mm.bing.net/th?id=OIP.0USJUvrdUDRjkijOD-9jRQHaHa&pid=Api&P=0&h=180',
        Name: 'Sanddisk Extreme p...',
        Price: 5799,
    },
]


  return (
    <>
     <div className='relative sm:text-center top-2  bg-[white] xl:mr-[16.6rem] sm:mr-2 md:mr-2 ml-2 '>
     <div className='mt-12 justify-center items-center '>
      <div className='my-6 flex justify-between'>
        <h1 className='ml-4 relative top-5 text-[22px] font-bold'>
          Best of Electronics
        </h1>
        <p className='text-[white]  relative mr-4 top-5'>
          <MdKeyboardArrowRight className='bg-[blue] md:flex xl:flex hidden cursor-pointer w-6 h-6 rounded-full '  />
        </p>
    </div>
      </div>
   
    <div className=' xl:flex  p-6 grid sm:grid-cols-2 md:grid-cols-4 xl:gap-4 gap-3'>
    {
     myData.map((item,i)=>(
        <div className='border 
         border-gray-300 cursor-pointer
         p-6 md:w-[10.6rem] sm:w-[15rem] rounded'>
        <img className='w-[11rem]' src={item.img} alt="" />
        <div className='relative top-4'>
        <p className='text-[15px]'>{item.Name}</p>
        <h2 className='font-semibold text-[16px]'>From ₹{item.Price}</h2>
        </div>
        </div> 
      ))
    }
    </div>
    </div>


    <div className='bg-white p-3 sm:justify-center justify-center items-center relative top-6 mx-2'>
      <div className='flex py-4 justify-between'>
        <h1 className='ml-4 relative top-1 text-[22px] font-bold'>Beauty, Food, Toys & more</h1>
        <p className='text-[white]  relative mr-4 top-1'>
          <MdKeyboardArrowRight className='md:flex xl:flex hidden bg-[blue] cursor-pointer w-6 h-6 rounded-full '  />
        </p>
      </div>
      <div className='flex p-2  xl:flex gap-3 xl:gap-5 grid sm:grid-cols-2 md:grid-cols-4'>
        {
          data.map((items, i)=>(
            <div className='bg-white rounded xl:w-[12rem] text-center border border-gray-300'>
              <img className='w-[11rem] ' src={items.image} alt="" />
              <h2 className='font-bold'>From ₹ {items.price}</h2>
              <p>{items.description}</p>
            </div>
          ))
        }
      </div>
    </div>
    </> 
  )
}

export default Electronics




















// import React from 'react';
// import Slider from 'react-slick';
// import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

// const Electronics = () => {
//     const myData = [
//         {
//             img: 'https://tse3.mm.bing.net/th?id=OIP.oikiPckNRPmmaylsafDQVQHaHa&pid=Api&P=0&h=180',
//             Name: 'Printers',
//             Price: 3999,
//         },
//         {
//             img: 'https://tse4.mm.bing.net/th?id=OIP.Xgu2w7528qHso0_FyCRsfgHaHa&pid=Api&P=0&h=180',
//             Name: 'Cameras',
//             Price: 5999,
//         },
//         {
//             img: 'https://tse4.mm.bing.net/th?id=OIP.fNReBEV8veW1CNwryHSv4wHaEM&pid=Api&P=0&h=180',
//             Name: 'Projectors best qualities product...',
//             Price: 9999,
//         },
//         {
//             img: 'https://tse2.mm.bing.net/th?id=OIP.sHpY02sPxbw4vkNYBjChjAHaEK&pid=Api&P=0&h=180',
//             Name: 'Keyboards with backlit HP...',
//             Price: 299,
//         },
//         {
//             img: 'https://tse4.mm.bing.net/th?id=OIP.pCr5ZynnznhO8rw7IXkYaQHaHa&pid=Api&P=0&h=180',
//             Name: 'Monitors',
//             Price: 8279,
//         },
//         {
//             img: 'https://tse1.mm.bing.net/th?id=OIP.0USJUvrdUDRjkijOD-9jRQHaHa&pid=Api&P=0&h=180',
//             Name: 'Sanddisk Extreme p...',
//             Price: 5799,
//         },
//     ];

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 4,
//         slidesToScroll: 1
//     };

//     return (
//         <div className="relative top-2 bg-white xl:mr-16.6rem ml-2">
//             <div className="mt-12 justify-center items-center">
//                 <div className="my-6 flex justify-between">
//                     <h1 className="ml-4 relative top-5 text-22px font-bold">
//                         Best of Electronics
//                     </h1>
//                 </div>
//             </div>
//             <div className=" p-6 gap-3">
//                 <Slider {...settings}>
//                     {myData.map((item, i) => (
//                         <div key={i} className="border border-gray-300 p-6 w-11rem rounded">
//                             <img src={item.img} alt={item.Name} />
//                             <div className="relative top-4">
//                                 <p className="text-15px">{item.Name}</p>
//                                 <h2 className="font-semibold text-16px">From ₹{item.Price}</h2>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// export default Electronics;
