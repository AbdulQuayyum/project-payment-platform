import React, { useState } from 'react'

import CardDesign from './CardDesign';
import { Image1, Image2, Image3, Image4 } from '../Assets/Index';

const data = [
    {
        id: "01",
        imgUrl: Image1,
        title: "Total Control",
        desc: "lorem Ips but failed to locate Digital Security in the database"
    },
    {
        id: "02",
        imgUrl: Image2,
        title: "Easy to Use",
        desc: "lorem Ips but failed to locate Digital Security in the database"
    },
    {
        id: "03",
        imgUrl: Image3,
        title: "Digital Security",
        desc: "lorem Ips but failed to locate Digital Security in the database"
    },
    {
        id: "04",
        imgUrl: Image4,
        title: "Privacy",
        desc: "lorem Ips but failed to locate Digital Security in the database"
    },
]

const About = () => {
    const [active, setActive] = useState('02');

    return (
        <section className='flex justify-center px-6 py-12 sm:p-16 xs:p-8'>
            <div
                className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
            >
                <span
                    className='mb-5 text-4xl lg:text-5xl py-6 flex items-center justify-center font-extrabold text-[#000]'>
                    Why Should you choose our Payment Platform?
                </span>
                <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                    {data.map((item, index) => (
                        <CardDesign
                            key={item.id}
                            {...item}
                            index={index}
                            active={active}
                            handleClick={setActive}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About