import React from 'react'
import './Demo.css';
const Demo = () => {
  return (
    <div className='video'>
              <div className="container">
                  <div className="col-1">
                      <p>More Than 100 Financial Planners</p>
                      <p>One Philosophy</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum sit, mollitia quaerat aspernatur nostrum qui dolores tenetur vero minima perferendis quibusdam cum fugiat impedit cumque molestias, nesciunt id eaque.</p>
                      <button className='button'>Get your free</button>
                  </div>
                  <div className="col-2">
                      <iframe width='570' height='320' src="https://www.youtube.com/embed/9f0is3lWtfE"allowFullScreen></iframe>
                
                  </div>
              </div>
    </div>
  )
}

export default Demo
