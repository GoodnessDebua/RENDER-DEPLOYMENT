import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1 className='text-primary fw-bold mb-4'>About Us</h1>
                    <p className='lead'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur atque itaque, eos asperiores delectus quidem explicabo est iure praesentium saepe? Suscipit distinctio modi doloremque veritatis autem neque ipsam magnam sequi!</p>
                    <NavLink to='/contact' className="btn btn-outline-primary px-3" >Contact Us</NavLink>
                </div>
                <div className='col-md-6 d-flex justify-content-center'>
                    <img src="/assets/images/about.jpeg" alt="About Us" height='400px' width='400px' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About