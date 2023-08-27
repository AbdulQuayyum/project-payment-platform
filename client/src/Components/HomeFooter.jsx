import React from 'react'

const HomeFooter = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div className='footer-container'>
            <div>
                <span className=" dark:text-[#fff]">{currentYear} &#169; Abdul-Quayyum Alao, All rights reserved</span>
            </div>
            <div className='flex gap-6'>
                <span className="cursor-pointer dark:text-[#fff]">Terms & Conditions</span>
                <span className="cursor-pointer dark:text-[#fff]">Privacy Policy</span>
            </div>
        </div>
    )
}

export default HomeFooter