import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { LuCopy } from "react-icons/lu"
import toast from 'react-hot-toast';

import { PageTitle } from '../../Components/Index';
import { NotficationData } from '../../Data/Dummy';

const Settings = () => {
    const [openTab, setOpenTab] = useState(1);
    const [openNotification, setOpenNotification] = useState(1);
    const { user } = useSelector((state) => state.users)

    return (
        <div className=''>
            <div className="mx-auto flex flex-col container">
                <PageTitle Title={"Settings"} />
                <ul className="flex my-4 gap-x-4">
                    <li>
                        <a
                            href="#"
                            onClick={() => setOpenTab(1)}
                            className={` ${openTab === 1 ? "border-[#000] border-b-2 text-black" : ""} inline-block px-4 py-2 text-start font-extrabold text-[#aaa]`}
                        >
                            Profile
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={() => setOpenTab(2)}
                            className={` ${openTab === 2 ? "border-[#000] border-b-2 text-black" : ""} inline-block px-4 py-2 font-extrabold text-[#aaa]`}


                        >
                            Notifications
                        </a>
                    </li>
                </ul>
                <div className={openTab === 1 ? "block" : "hidden"}>
                    <div className="flex flex-col items-stretch lg:flex-row justify-center">
                        <div className="flex-1 p-4">
                            <div className='flex flex-col h-full p-6 bg-white border border-gray-200 rounded-lg shadow gap-y-4'>
                                <div className='flex flex-col justify-between min-[500px]:flex-row'>
                                    <span className='text-[#aaa] font-extrabold'>Account Name:</span>
                                    <span className='text-[#aaa]'>{user?.FirstName} {user?.LastName}</span>
                                </div>
                                <div className='flex flex-col justify-between min-[500px]:flex-row'>
                                    <span className='text-[#aaa] font-extrabold'>Account Number:</span>
                                    <div className='flex items-center gap-x-2'>
                                        <span className='text-[#aaa]'>{user?._id}</span>
                                        <CopyToClipboard
                                            onCopy={() => { toast.success("Account Number copied successfully", { duration: 2000, position: 'top-right' }) }}
                                            className="cursor-pointer" text={user?._id}>
                                            <LuCopy color='#aaa' />
                                        </CopyToClipboard>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between min-[500px]:flex-row'>
                                    <span className='text-[#aaa] font-extrabold'>Account Balance:</span>
                                    <span className='text-[#aaa]'>₦{user?.Balance}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 p-4">
                            <div className='flex flex-col h-full p-6 bg-white border border-gray-200 rounded-lg shadow gap-y-4'>
                                <div className='flex flex-col justify-between min-[500px]:flex-row'>
                                    <span className='text-[#aaa] font-extrabold'>First Name:</span>
                                    <span className='text-[#aaa]'>{user?.FirstName}</span>
                                </div>
                                <div className='flex flex-col justify-between min-[500px]:flex-row'>
                                    <span className='text-[#aaa] font-extrabold'>Last Name:</span>
                                    <span className='text-[#aaa]'>{user?.LastName}</span>
                                </div>
                                <div className='flex flex-col justify-between min-[500px]:flex-row'>
                                    <span className='text-[#aaa] font-extrabold'>Email Address:</span>
                                    <span className='text-[#aaa]'>{user?.Email}</span>
                                </div>
                                <div className='flex flex-col justify-between min-[500px]:flex-row'>
                                    <span className='text-[#aaa] font-extrabold'>User Country:</span>
                                    <span className='text-[#aaa]'>{user?.Country}</span>
                                </div>
                                <div className='flex flex-col justify-between min-[500px]:flex-row'>
                                    <span className='text-[#aaa] font-extrabold'>Phone Number:</span>
                                    <span className='text-[#aaa]'>{user?.PhoneNumber}</span>
                                </div>
                                <div className='flex flex-col justify-between min-[500px]:flex-row'>
                                    <span className='text-[#aaa] font-extrabold'>Identity Type:</span>
                                    <span className='text-[#aaa]'>{user?.IdentificationType}</span>
                                </div>
                                <div className='flex flex-col justify-between min-[500px]:flex-row'>
                                    <span className='text-[#aaa] font-extrabold'>Identification Number:</span>
                                    <span className='text-[#aaa]'>{user?.IdentificationNumber}</span>
                                </div>
                                <div className='flex flex-col justify-between min-[500px]:flex-row'>
                                    <span className='text-[#aaa] font-extrabold'>Addresss:</span>
                                    <span className='text-[#aaa]'>{user?.Address}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"}>
                    <div className="flex flex-col w-full sm:w-[500px] justify-start gap-x-8 px-5 py-5 bg-white rounded-xl">
                        <ul className="flex gap-x-8">
                            <li>
                                <a
                                    href="#"
                                    onClick={() => setOpenNotification(1)}
                                    className={` ${openNotification === 1 ? "border-[#000] border-b-2 text-black" : ""} inline-block px-4 py-2 text-start font-extrabold text-[#aaa]`}
                                >
                                    All
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onClick={() => setOpenNotification(2)}
                                    className={` ${openNotification === 2 ? "border-[#000] border-b-2 text-black" : ""} inline-block px-4 py-2 text-start font-extrabold text-[#aaa]`} >
                                    Unread
                                </a>
                            </li>
                        </ul>
                        <div className="flex w-full mt-5">
                            <div className={openNotification === 1 ? "block" : "hidden"}>
                                {NotficationData?.map((item, index) => (
                                    <div key={index} className="flex mt-8 items-center justify-between w-full sm:w-[460px]">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <p className="font-semibold dark:text-gray-200">{item.message}</p>
                                                <p className="text-base text-gray-500 dark:text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <span className="bg-[#000] rounded-full h-2 w-2"></span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={openNotification === 2 ? "block" : "hidden"}>
                                {NotficationData?.map((item, index) => (
                                    <div key={index} className="flex mt-8 items-center justify-between w-full sm:w-[460px]">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <p className="font-semibold dark:text-gray-200">{item.message}</p>
                                                <p className="text-base text-gray-500 dark:text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <span className="bg-[#000] rounded-full h-2 w-2"></span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings