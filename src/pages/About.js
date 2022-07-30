import React from 'react'
import { useNavigate } from 'react-router-dom'
import coding from '../assets/coding.svg'

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="aboutBody">
      
      <div className='aboutContainer'>
        <img src={coding} alt="coderMan" className='coderImg' />
        <h1>About Software Developer <span style={{fontSize:'2rem', color:'white'}}>Yusuf</span></h1>
        <div className='textDiv'>
          <h3>I'm Yusuf.</h3>
          <p>I'm currently learning Full-Stack Development Languages.</p>
          <p>I've already known JS, ReactJS, NodeJS, MongoDB, SQL, Python, Agile Methodologies.</p>
          <p><span>Send email</span> : yusufgozukara11@gmail.com</p>
          <button className='homePageButton' onClick={() => navigate('/')}>Home Page</button>
        </div>

      </div>
    </div>
  )
}

export default About