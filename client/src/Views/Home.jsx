import React from 'react'

import { About, Hero } from "../Components/Index"
import HomeLayout from "../Layouts/Home.Layout"

const Home = () => {
    return (
        <HomeLayout>
            <div className='flex flex-col justify-center mt-32 md:mt-20'>
                <Hero />
                <About />
            </div>
        </HomeLayout>
    )
}

export default Home