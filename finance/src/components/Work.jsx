import React from 'react'
import logo1 from './img_1/logo1.jpg';
import logo2 from './img_1/logo2.jpg';
import logo3 from './img_1/logo3.jpg';
import logo4 from './img_1/logo4.jpg';
import logo5 from './img_1/logo5.jpg';
import logo6 from './img_1/logo6.jpg';
const Work = () => {
  return (
    <div id='work' >
           {/* Container  */}
          
         <div className="max-w-[1240px] mx-auto p-4 flex flex-col justify-center min-h-screen">
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
                     <div className='shadow-md  hover:scale-110 duration-500'>
                        <img className='rounded-full object-cover w-full h-auto max-w-xs'  src={logo1} alt="" />
                     </div>
                 </div>
         
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
                     <div className='shadow-md  hover:scale-110 duration-500'>
                        <img className='rounded-full object-cover w-full h-auto max-w-xs'  src={logo2} alt="logo2" />
                     </div>
                 </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
                     <div className='shadow-md  hover:scale-110 duration-500'>
                        <img className='rounded-full object-cover w-full h-auto max-w-xs'  src={logo3} alt="logo3" />
                     </div>
                 </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
                     <div className='shadow-md  hover:scale-110 duration-500'>
                        <img className='rounded-full object-cover w-full h-auto max-w-xs'  src={logo4} alt="logo4" />
                     </div>
                 </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
                     <div className='shadow-md  hover:scale-110 duration-500'>
                        <img className='rounded-full object-cover w-full h-auto max-w-xs'  src={logo5} alt="logo5" />
                     </div>
                 </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
                     <div className='shadow-md  hover:scale-110 duration-500'>
                        <img className='rounded-full object-cover w-full h-auto max-w-xs'  src={logo6} alt="logo6" />
                     </div>
                 </div>


         
           </div>
    </div>
  )
}

export default Work
