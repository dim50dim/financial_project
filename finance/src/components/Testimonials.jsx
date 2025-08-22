import React from 'react'
import "./Testimonials.css"
import user1 from './images/user1.jpeg'
import user2 from './images/user2.jpeg'
import user3 from './images/user3.jpeg'
const Testimonials = () => {
  return (
    <div className='testimonials' name='testimonials'>
        <div className="container">
             <h2>Testimonials</h2>
             <span className="line"></span>
             <div className="content">
              <div className="card">
                <img src={user1} alt="user1" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem amet fugit quisquam molestiae repudiandae provident pariatur accusantium, expedita modi voluptatum officiis maxime? Quibusdam doloremque rerum placeat impedit quasi adipisci asperiores!</p>
                <p><span>Name </span></p>
                <p>Position</p>
              </div>
              <div className="card">
                <img src={user2} alt="user2" />
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem amet fugit quisquam molestiae repudiandae provident pariatur accusantium, expedita modi voluptatum officiis maxime? Quibusdam doloremque rerum placeat impedit quasi adipisci asperiores!</p>
                <p><span>Name </span></p>
                <p>Position</p>
              </div>
              <div className="card">
                <img src={user3} alt="user3" />
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem amet fugit quisquam molestiae repudiandae provident pariatur accusantium, expedita modi voluptatum officiis maxime? Quibusdam doloremque rerum placeat impedit quasi adipisci asperiores!</p>
                <p><span>Name </span></p>
                <p>Position</p>
              </div>
             </div>
        </div>
    </div>
  )
}

export default Testimonials
