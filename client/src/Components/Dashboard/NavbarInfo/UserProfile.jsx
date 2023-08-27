import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { TbX } from 'react-icons/tb';
import { FaRegUser } from "react-icons/fa"
import { CgLogOut } from "react-icons/cg"

import Button from './Button';
import { setUser, setRemoveUser } from '../../../Redux/UsersSlice';
import { UserProfileData } from '../../../Data/Dummy';

const UserProfile = ({ user }) => {
    const dispatch = useDispatch()
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    )

    const HandleLogout = () => {
        localStorage.removeItem("Token")
        dispatch(setRemoveUser(true));
        setUser(null)
        async function nextPage() {
            await delay(2000)
            window.location.reload()
        }
        nextPage()
    }

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
                < FaRegUser className="w-20 h-20" />
                <div>
                    <p className="text-xl font-semibold dark:text-gray-200">{user?.FirstName} {user?.LastName}</p>
                    <p className="text-base font-semibold text-gray-500 dark:text-gray-400">{user?.Email}</p>
                </div>
            </div>
            <div>
                <Link to="/Settings">
                    {UserProfileData.map((item, index) => (
                        <div key={index} className="flex gap-5 items-center border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
                            <button
                                type="button"
                                style={{ color: item?.iconColor, backgroundColor: item?.iconBg }}
                                className="p-3 text-xl rounded-lg hover:bg-light-gray"
                            >
                                {item.icon()}
                            </button>

                            <div>
                                <p className="font-semibold dark:text-gray-200 ">{item?.title}</p>
                            </div>
                        </div>
                    ))}
                </Link>
            </div>
            <button
                onClick={HandleLogout}
                className="mt-5 flex px-5 items-center text-[#aaa] hover:text-black gap-x-4">
                < CgLogOut size={22} />
                <span className='text-lg font-semibold'>Logout</span>
            </button>
        </div>

    );
};

export default UserProfile;