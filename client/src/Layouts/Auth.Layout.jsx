import React from 'react'

import { Footer, Navbar } from "../Components/Index"

export default function AuthLayout(props) {
    const { children } = props
    return (
        <div className='relative z-10 flex flex-col items-center justify-between min-h-screen px-6 mx-auto max-w-7xl sm:px-16'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
