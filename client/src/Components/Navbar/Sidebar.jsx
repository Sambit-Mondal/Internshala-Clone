import React, { useEffect, useRef, useState } from 'react'
import logo from '../../Assets/logo.png'
import './sidebar.css'

function Sidebar() {

    // Initializing state variable
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const ref = useRef();

    useEffect(() => {
    const handleOutsideClick = (e) => {
        if (
            sidebarOpen && ref.current && !ref.current.contains(e.target)
        ) {
            setSidebarOpen(false);
        }
    };

    // Closes the sidebar when a click outside the sidebar is detected
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {

        //Cleanup the event listener
        document.removeEventListener('mousedown', handleOutsideClick);
    };
}, [sidebarOpen]);

    return (
        <div>
            <nav ref={ref} className='navbar-small-screens flex flex-wrap items-center content-center pt-4 pb-4 w-full'>
                <div className='nav-main grid'>
                    <div className='logo-and-toggle flex'>
                        <button className='toggle border-0 z-50' onClick={() => setSidebarOpen((prev) => !prev)}>
                            {sidebarOpen ? (
                                <i class='bi bi-x-lg text-2xl'></i>
                            ) : (
                                <i class="bi bi-list text-2xl"></i>
                            )}
                        </button>

                        <div className={`sidemenu${sidebarOpen ? '  show-menu' : ''}`}>
                            <p>Internships</p>
                            <p>Jobs</p>
                            <p className='courses'>Courses <span className='offer-text'>OFFER</span></p>
                            <p>Placement Guarantee Courses</p>
                            <p>Study Abroad</p>
                            <p>Study in India</p>
                            <p>Online Degrees</p>
                            <p>Contact Us</p>
                            <p>Get our App</p>
                            <hr></hr>
                            <p>Register - As a Student</p>
                            <p>Register - As an Employer</p>
                            <p>Login</p>
                        </div>

                        <div className='nav-logo-small'>
                            <img className='w-auto h-12' src={logo} alt='InternQuest logo'></img>
                        </div>
                    </div>
                    <div className='user-auth flex'>
                        <button className='register cursor-pointer w-auto h-auto items-end content-end'>Register <i class="bi bi-caret-down-fill"></i></button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar