import React, { useEffect, useState } from 'react'

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

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if(sidebarOpen && !e.target.closest('.sidebar') && !e.target.closest('open-btn')) {
                closeSidebar();
            }
        }

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        }
    }, [sidebarOpen]);

  return [sidebarOpen] (
    <div>
        
    </div>
  )
}

export default Sidebar