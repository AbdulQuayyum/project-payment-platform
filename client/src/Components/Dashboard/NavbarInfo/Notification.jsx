import React from 'react';
import { Link } from 'react-router-dom'
import { TbX } from 'react-icons/tb';

import { NotficationData } from '../../../Data/Dummy';
import Button from './Button';

const Notification = () => {

    return (
        <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
            <div className="flex items-center justify-between">
                <div className="flex gap-3">
                    <p className="text-lg font-semibold dark:text-gray-200">Notifications</p>
                    <button type="button" className="p-1 px-2 text-xs text-white rounded bg-orange-theme "> 5 New</button>
                </div>
                <Button icon={<TbX />} color="rgb(153, 171, 180)" bgHoverColor="light-gray" size="2xl" borderRadius="50%" />
            </div>
            <div className="mt-5 ">
                {NotficationData?.map((item, index) => (
                    <div key={index} className="flex items-center gap-5 p-3 leading-8 border-b-1 border-color">
                        {item.image()} {/* Call the function to render the JSX component */}
                        <div>
                            <p className="font-semibold dark:text-gray-200">{item.message}</p>
                            <p className="text-base text-gray-500 dark:text-gray-400"> {item.desc} </p>
                        </div>
                    </div>
                ))}
                <div className="mt-5 justify-center flex">
                    <Link to="/Settings">
                        <span className='text-[#aaa] hover:text-black font-semibold'>See all Notifications</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Notification;