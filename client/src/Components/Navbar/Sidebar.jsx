import React, { useEffect, useState } from 'react'
import logo from '../../Assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'

function Sidebar() {

    // Sidebar 
    const [sidebarOpen, setSidebarOpen] = useState(false);


    // Sidebar open
    const openSidebar = () => {
        setSidebarOpen(true)
    }


    // Sidebar close
    const closeSidebar = () => {
        setSidebarOpen(false)
    }


    // Handle Outside Click ---> Function
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (sidebarOpen && !e.target.closest('.sidebar') && !e.target.closest('open-btn')) {
                closeSidebar();
            }
        }

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        }
    }, [sidebarOpen]);



    // Declaring an user
    const user = null;

    return [sidebarOpen](
        <>
            <div className='navbar-small-screens -mt-2 overflow-hidden'>
                <Link to="/">
                    <img src={logo} alt='Logo' id='navbar-small-screens-img' />
                </Link>
                <div className={`sidebar ${sidebarOpen ? 'open' : ""}`}>
                    <span className='cursor-pointer close-btn' onClick={closeSidebar}>
                        <i class="bi bi-x-lg"></i>
                    </span>
                    {
                        user ? (
                            <>
                            
                            {/* User profile name and photo */}
                                <div className='user-profile'>
                                    <Link to="/profile">
                                        <img className='rounded-full justify-center' alt='User' src={user.photo} />
                                    </Link>
                                    <p className='text-center'>
                                        Profile Name
                                        <span className='font-bold text-blue-500'>
                                            {user.name}
                                        </span>
                                    </p>
                                </div>
                            </>
                        ) : (<div className='user-auth'></div>)
                    }


                    {/* Internships and jobs links */}
                    <Link to="/internships">Internships</Link>
                    <Link to="/jobs">Jobs</Link>
                    <Link to="/contact-us">Contact Us</Link>
                    <hr />


                    {/* My applications and Register button */}
                    {
                        user ? (
                            <Link to="/my-applications">
                                My Applications
                            </Link>
                        ) : (
                            <Link to="/register">
                                Register
                            </Link>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Sidebar