import React from 'react'
import Navbar from '../Navbar'
import { Link, NavLink } from 'react-router-dom'

const catalogHome = () => {
  return (
    <div>
    <Navbar />
    <div className="relative h-full">
    <div className="  pb-20 object-cover h-full w-full ">
      <img src="/images/bg.jpg" alt="" className="object-cover absolute w-full h-full" />
      <div className="max-w-screen-xl px-3 lg:px-14  mx-auto lg:gap-8 xl:gap-12 ">
      <div className="flex flex-col gap-2 md:pt-[130px] pt-[100px] h-full text-white">
        <h4 className="text-amber-400  z-10 text-[30px] md:text-[45px] font-[600]">Homey Catalog</h4>
        {/* <div className='bg-amber-400 z-10 h-[6px] w-[180px] md:w-[270px]'></div> */}
        <h4 className="text-white z-10 pb-2 text-[22px] leading-[40px] md:text-[28px] font-[400]">
Places of interest near you
            </h4>
   
   <div className='grid lg:grid-cols-4 grid-cols-3 gap-2 z-10'>
    <Link to="/catalog-item">
    <img src="/images/download.jpg" alt="location" className="rounded-md" />
<h4 className='text-[12px] text-center'>FOOD VENDORS</h4>
    </Link>

    <div>
    <img src="/images/download (1).jpg" alt="location" className="rounded-md" />
<h4 className='text-[12px] text-center uppercase'>restaurants</h4>
    </div>

    <div>
    <img src="/images/download (2).jpg" alt="location" className="rounded-md" />
<h4 className='text-[12px] text-center uppercase'>supermarket</h4>
    </div>

    <div>
    <img src="/images/download (3).jpg" alt="location" className="rounded-md" />
<h4 className='text-[12px] text-center uppercase'>market</h4>
    </div>

    <div>
    <img src="/images/download (4).jpg" alt="location" className="rounded-md" />
<h4 className='text-[12px] text-center uppercase'>boutique</h4>
    </div>

    <div>
    <img src="/images/download (5).jpg" alt="location" className="rounded-md" />
<h4 className='text-[12px] text-center uppercase'>lounge</h4>
    </div>

    <div>
    <img src="/images/images.jpg" alt="location" className="rounded-md" />
<h4 className='text-[12px] text-center uppercase'>parks</h4>
    </div>

    <div>
    <img src="/images/download (6).jpg" alt="location" className="rounded-md" />
<h4 className='text-[12px] text-center uppercase'>gym</h4>
    </div>

    <div>
    <img src="/images/download (7).jpg" alt="location" className="rounded-md" />
<h4 className='text-[12px] text-center uppercase'>beaches</h4>
    </div>

    <div>
    <img src="/images/download (8).jpg" alt="location" className="rounded-md" />
<h4 className='text-[12px] text-center uppercase'>cinemas</h4>
    </div>

    <div>
    <img src="/images/download (9).jpg" alt="location" className="rounded-md" />
<h4 className='text-[12px] text-center uppercase'>workstations</h4>
    </div>

    <div>
    <img src="/images/images (1).jpg" alt="location" className="rounded-md" />
<h4 className='text-[12px] text-center uppercase'>personal shopper</h4>
    </div>

    <div>
    <img src="/images/download (10).jpg" alt="location" className="rounded-md" />
<h4 className='text-[12px] text-center uppercase'>pharmacy</h4>
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

export default catalogHome
