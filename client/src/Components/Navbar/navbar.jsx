import React from 'react'
import logo from '../../Assets/logo.png'
import './navbar.css'
import Sidebar from './Sidebar'

function Navbar() {
  return (
    <div>
      <nav className='navbar-large-screens flex fixed top-0 flex-wrap h-auto overflow-hidden pt-4 pb-4 pl-6 pr-6 items-center w-full'>
        <div className='nav-main flex flex-1'>
          <i class="nav-btn bi bi-list items-center content-center text-xl pr-4"></i>
          <div className='nav-logo flex gap-5 mr-36 font-bold text-xl items-center content-center'>
            <img className='w-10 h-10' src={logo} alt='InternQuest logo'></img>
            <p className='nav-text'>
              InternQuest
            </p>
          </div>
          <div className='elements flex gap-20 flex-1'>
            <p className='cursor-pointer'>Internships <i class="bi bi-caret-down-fill"></i></p>
            <p className='cursor-pointer'>Jobs <i class="bi bi-caret-down-fill"></i></p>
          </div>
          <div className='search flex ml-36 mr-24'>
            <i class="bi bi-search"></i>
            <input className='cursor-pointer' placeholder='Search' />
          </div>
        </div>
        <div className='user-auth flex gap-5'>
          <button className='login cursor-pointer'>Login</button>
          <button className='register cursor-pointer'>Register</button>
        </div>
      </nav>
      <Sidebar />
    </div>
  )
}

export default Navbar