import React, { useState } from 'react'
import { Link } from "react-router-dom";

import Logo from "/logo.png";

const Header = () => {

    return (
        <div
            className="flex-wrap items-center justify-between px-4 py-2 navbar-container">
            <div className='flex items-center logo gap-x-4 navbar-1'>
                <img src={Logo} alt='Logo' className='object-contain w-auto h-10' />
            </div>
            <div className='flex items-center justify-end gap-2 md:order-2 gap-x-4'>
                <Link
                    className="flex items-center bg-transparent text-lg outlined px-8 md:px-14 font-medium !h-[38px] md:!h-[48px] hover:text-[#fff] transition-all duration-150 border-[1px] border-[#000] rounded-full hover:bg-[#000] text-[#000]"
                    to="/Register"
                > Get Started
                </Link>
            </div>
            <div className='relative flex justify-center w-full mt-6 md:mt-0 md:order-1 md:w-auto md:py-0'>
                <span
                    className='font-extrabold text-[#000] px-5 cursor-pointer'>
                    Why use our Platform?</span>
                <span className='font-extrabold text-[#000] px-5 cursor-pointer border-l-2'>Our Partners</span>
            </div>
        </div>
    )
}

export default Header