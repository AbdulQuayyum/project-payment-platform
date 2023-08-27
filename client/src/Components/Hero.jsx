import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { TbArrowBigRightLines } from "react-icons/tb"

import { Image1, Image2, Image3, Image4 } from '../Assets/Index';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const ImageList = [Image1, Image2, Image3, Image4]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ImageList.length);
        }, 10000); // 10 seconds in milliseconds

        return () => clearInterval(interval);
    }, []);

    const currentImageUrl = ImageList[currentImageIndex];
    return (
        <div>
            <div className='flex flex-col-reverse items-center justify-center w-full gap-10 mx-auto mt-0 lg:gap-20 md:mt-20 md:flex-row'>
                <div className='flex flex-col max-w-md lg:max-w-xl'>
                    <span className='mb-5 text-4xl lg:text-5xl py-6 font-extrabold text-[#000]'>
                        Our Payment Platform is blah blah blah
                    </span>
                    <span className='text-[#aaa] text-base lg:text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi minus dolores vitae aspernatur ducimus nam officia
                        odio culpa quibusdam quidem praesentium dolorem deserunt,
                        eos debitis odit provident at. Rerum, fugit!
                    </span>
                    <div className='flex items-center justify-center mt-10 sm:justify-start'>
                        <Link
                            className="flex custom-hover items-center bg-transparent text-lg outlined px-8 md:px-14 font-medium !h-[38px] md:!h-[48px] hover:text-[#fff] transition-all duration-150 border-[1px] border-[#000] rounded-full hover:bg-[#000] text-[#000]"
                            to="/Login"
                        > Get Started
                            < TbArrowBigRightLines className='ml-2 hover-icon' />
                        </Link>
                    </div>
                </div>
                <div
                    className='hero-img'
                    style={{ backgroundImage: `url(${currentImageUrl})` }}>
                </div>
            </div>
        </div>
    )
}

export default Hero