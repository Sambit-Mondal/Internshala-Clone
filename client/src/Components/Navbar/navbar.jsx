import React from 'react'
import logo from '../../Assets/logo.png'
import './navbar.css'
import Sidebar from './Sidebar'

function Navbar() {
  return (
    <div>
      <nav className='navbar-large-screens grid fixed top-0 flex-wrap h-auto overflow-hidden pt-4 pb-4 items-center w-full'>
        <div className='nav-main flex pl-5'>
          <div className='nav-logo flex gap-5 mr-16 font-bold text-xl items-center content-center'>
            <img className='w-32 h-12' src={logo} alt='InternQuest logo'></img>
          </div>
          <div className='elements flex gap-10'>
            <p className='cursor-pointer'>Internships <i class="bi bi-caret-down-fill"></i></p>
            <p className='cursor-pointer'>Jobs <i class="bi bi-caret-down-fill"></i></p>
            <p className='courses cursor-pointer'>Courses <span className='offer-text'>OFFER</span> <i class="bi bi-caret-down-fill"></i></p>
          </div>
        </div>
        <div className='user-auth flex gap-5 items-end content-center pl-3 pr-5'>
          <div className='search flex content-center items-center'>
            <i class="bi bi-search"></i>
            <p className='cursor-pointer'>Search</p>
          </div>
          <button className='login cursor-pointer'>Login</button>
          <button className='register register-candidate cursor-pointer'>Candidate Sign-up</button>
          <button className='register regitser-employer cursor-pointer'>Employer Sign-up</button>
        </div>
      </nav>
      <Sidebar />
    </div>
  )
}

export default Navbar