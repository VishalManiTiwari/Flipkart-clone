import React from 'react'
import { data1 } from '../Data/data'

const Mobile = () => {
  return (
    <>
    <div className='bg-white'>
     <h1>Realme Smarphones</h1>
      <div className='gap-3 items-center justify-center relative grid md:grid-cols-4 xl:flex p-4  mx-2'>
        {
          data1.map((item,i)=>(
            <div className='relative text-center p-4'>
                <img className='w-[8rem] ' src={item.img} alt="" />
                <p>{item.description}</p>
                <p>{item.rating}</p>
                <p>₹{item.price}</p>
            </div>
          ))
        }
      </div>
      </div>
    </>
  )
}

export default Mobile
