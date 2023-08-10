import React from 'react';
import { TbX } from 'react-icons/tb';
import { FaRegUser } from "react-icons/fa"

import Button from './Button';
import { UserProfileData } from '../../../Data/Dummy';

const UserProfile = () => {

    return (
        <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
            <div className="flex items-center justify-between">
                <p className="text-lg font-semibold dark:text-gray-200">User Profile</p>
                <Button
                    icon={<TbX />}
                    color="rgb(153, 171, 180)"
                    bgHoverColor="light-gray"
                    size="2xl"
                    borderRadius="50%"
                />
            </div>
            <div className="flex items-center gap-5 pb-6 mt-6 border-color border-b-1">
                <img
                    className="w-24 h-24 rounded-full"
                    src={User || <FaRegUser />}
                    alt="user-profile"
                />
                <div>
                    <p className="text-xl font-semibold dark:text-gray-200">{fullName || "Ayinla Akekereko"}</p>
                    <p className="text-base font-semibold text-gray-500 dark:text-gray-400"> {email || "ayinlaakekero@gmail.com"}</p>
                </div>
            </div>
            <div>
                {UserProfileData.map((item, index) => (
                    <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
                        <button
                            type="button"
                            style={{ color: item?.iconColor, backgroundColor: item?.iconBg }}
                            className="p-3 text-xl rounded-lg hover:bg-light-gray"
                        >
                            {item.icon}
                        </button>

                        <div>
                            <p className="font-semibold dark:text-gray-200 ">{item?.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-5">
                <Button
                    color="#aaa"
                    text="Logout"
                    borderRadius="10px"
                    width="full"
                />
            </div>
        </div>

    );
};

export default UserProfile;