import React from 'react'
import logo1 from './img_1/logo1.jpg';
const Work = () => {
  return (
    <div id='work' >
           {/* Container  */}
           <div className='max-w-[1240px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
             
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
                     <div className='shadow-md  hover:scale-110 duration-500'>
                        <img className='w-full h-auto'  src={logo1} alt="" />
                     </div>
                 </div>
         
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
                     <div className='shadow-md  hover:scale-110 duration-500'>
                        <img className='w-full h-auto'  src={logo1} alt="" />
                     </div>
                 </div>
         
           </div>
    </div>
  )
}

export default Work
