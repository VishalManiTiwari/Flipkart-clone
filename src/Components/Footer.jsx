import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-black   p-7 xl:flex grid md:grid-cols-3  justify-between relative  text-white'>
        <div>
          <h1 className='text-[gray] realtive py-2 text-[13px]'>ABOUT</h1>
          <ul className='text-[12px] font-bold'>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div>
          <h1 className='text-[gray] realtive py-2 text-[13px]'>GROUP COMPANIES</h1>
          <ul className='text-[12px] font-bold'>
            <li>Myntra</li>
            <li>Flipkart Wholesale</li>
            <li>Cleartrip</li>
            <li>Shopsy</li>
          </ul>
        </div>
        <div>
          <h1 className='text-[gray] realtive py-2 text-[13px]'>HELP</h1>
          <ul className='text-[12px] font-bold'>
            <li>Payment</li>
            <li>Shipping</li>
            <li>Cancellation & Return</li>
            <li>FAQ</li>
            <li>Report Infringment</li>
          </ul>
        </div>
        <div>
          <h1 className='text-[gray] realtive py-2 text-[13px]'>CONSUMER POLICY</h1>
          <ul className='text-[12px] font-bold'>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privecy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
            <li>EPR Compliance</li>
          </ul>
        </div>
        <div className='xl:flex hidden border border-white-300'></div>
        <div>
          <h1 className='text-[gray] realtive py-2 text-[13px]'>Mail Us</h1>
          <ul className='text-[12px] font-bold'>
            <li>Flipkart Internet Privet Limited,</li>
            <li>Building Alyssa, Begonia &</li>
            <li>Clove Embasy Tech Village,</li>
            <li>Outer Ring Road, Devarabeesanahalli Village</li>
            <li>Bengluru, 5601103,</li>
            <li>Karnataka, India</li>
          </ul>
        </div>
        <div>
         <h1 className='text-[gray] realtive py-2 text-[13px]'>Registered Office Address:</h1>
         <ul className='text-[12px] font-bold'>
         <li> Flipkar Internet Private Limited,</li>
         <li>Building Alyssa, Begonia &</li>
         <li> Clove Embassy Tech Village,</li>
         <li>Outer Ring Road, deverabeesanahalli Village,</li>
         <li> Bengaluru, 560103,</li>
         <li> Karnataka,India</li>
         <li>CIN : U51109KA2012PTC066107</li>
         <li>Telephone:<p>044-45614700</p></li>
         </ul>
        </div>
      
      </div> 
      

    </>
  )
}

export default Footer
