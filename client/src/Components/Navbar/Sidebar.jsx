import React, { useState } from 'react'
import logo from '../../Assets/logo.png'
import './sidebar.css'

function Sidebar() {

    // Initializing state variable
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <nav className='navbar-small-screens flex flex-1 items-center content-center pt-4 pb-4 w-full'>
                <div>
                    <button className='toggle border-0 pr-3' onClick={() => setSidebarOpen((prev) => !prev)}>
                        {sidebarOpen ? (
                            <i class='bi bi-x-lg text-2xl'></i>
                        ) : (
                            <i class="bi bi-list text-2xl"></i>
                        )}
                    </button>
                </div>
                    <div className={`sidemenu${sidebarOpen? '  show-menu' : ''}`}>
                        <p>Internships</p>
                        <p>Jobs</p>
                        <p>Courses</p>
                        <p>Placement Guarantee Courses</p>
                        <p>Study Abroad</p>
                        <p>Study in India</p>
                        <p>Online Degrees</p>
                        <p>Contact Us</p>
                        <p>Get our App</p>
                        <hr></hr>
                        <p>Register as Student</p>
                        <p>Register as Employer</p>
                        <p>Login</p>
                    </div>
                <div className='nav-main flex gap-28'>
                    <div className='nav-logo-small'>
                        <img className='w-11 h-11' src={logo} alt='InternQuest logo'></img>
                    </div>
                    <div className='user-auth flex'>
                        <button className='register cursor-pointer w-28'>Register</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar