import React from 'react'

import { Toggler } from "../Theme/Index"
import Logo from "/logo.png"

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between w-full pt-3 mb-10'>
            <>
                <img src={Logo} alt='Logo' className='object-contain h-auto w-14' />
            </>
            <div className='flex gap-4 '>
                <Toggler />
            </div>
        </nav>
    )
}

export default Navbar