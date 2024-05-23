import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Navbar from '../../../Navbar'
import { GrLocation } from "react-icons/gr";
import { IoPersonCircleSharp } from "react-icons/io5";

const EachItemCatalog = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-screen ">
    <div className="absolute h-screen md:pt-[130px] pt-[100px] pb-20 object-cover w-full ">
      {/* <img src={teamsbg} alt="" className="object-cover absolute w-full h-screen" /> */}
      <div className="max-w-screen-xl px-3 lg:px-14  mx-auto lg:gap-8 xl:gap-12 ">
      <div className="flex flex-col gap-2  h-full text-white">
        <h4 className="text-amber-400  z-10 text-[30px] md:text-[45px] font-[600]">Yakoyo Abula Joint</h4>
        {/* <div className='bg-amber-400 z-10 h-[6px] w-[180px] md:w-[270px]'></div> */}
    
        <div className='z-10'>
    <img src="/images/download.jpg" alt="location" className="rounded-md" />
{/* <h4 className='text-[12px] text-center uppercase'>yakoyo abula joint</h4> */}
    </div>

    <div className='flex flex-col gap-4 pt-4 z-10'>
<div className='flex items-center gap-2'>
<IoPersonCircleSharp className="text-amber-400 w-8 h-8"/>
+234708399389
</div>
<div className='flex items-center gap-2'>
<GrLocation className="text-amber-400 w-8 h-8"/>
Sango Itedo
</div>
<div className='flex items-center gap-2'>
<GrLocation className="text-amber-400 w-8 h-8"/>
Yakoyo Abula Joint
</div>
    </div>
 
   <NavLink to="/" className="-mt-16 text-[22px] flex justify-end z-10">
    
    Homey host

   </NavLink>
      </div>


    
 
      </div>
      <div className="overlay absolute inset-0 bg-black opacity-70"></div>
    </div>
  </div>
    </div>
  )
}

export default EachItemCatalog
