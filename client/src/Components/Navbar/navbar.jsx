import React from 'react'
import logo from '../../Assets/logo.png'
import './navbar.css'

function Navbar() {
  return (
    <div>
      <nav className='navbar-large-screens flex fixed top-0'>
        <div className='nav-logo flex gap-5 mr-36 font-bold'>
          <img className='w-10 h-10' src={logo} alt='InternQuest logo'></img>
          <p className='nav-text'>
            InternQuest
          </p>
        </div>
        <div className='elements flex gap-10'>
          <p>Internships <i class="bi bi-caret-down-fill"></i></p>
          <p>Jobs <i class="bi bi-caret-down-fill"></i></p>
        </div>
        <div className='search flex'>
          <i class="bi bi-search"></i>
          <input placeholder='Search' />
        </div>
        <div className='user-auth flex gap-5 mr-10'>
          <button className='login'>Login</button>
          <button className='register'>Register</button>
        </div>
        <div className='admin-auth flex gap-5'>
          <button className='hire-talent'>Hire Talent</button>
          <button className='admin'>Admin</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar