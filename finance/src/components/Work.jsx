import React from 'react'
import logo1 from './img_1/logo1.jpg';
const Work = () => {
  return (
    <div name='work' >
           {/* Container  */}
           <div className='max-w-[1240px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
                     <div className='shadow-md shadow-[#eee] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto'  src={logo1} alt="" />
                     </div>
                </div>
           </div>
    </div>
  )
}

export default Work
