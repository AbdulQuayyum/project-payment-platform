import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import Select from 'react-select'
import toast from 'react-hot-toast';
import { CgSearch } from "react-icons/cg"

import { PageTitle } from '../../Components/Index';

const Transactions = () => {
    const { user } = useSelector((state) => state.users)
    const options = [
        { value: 'Pending', label: 'Pending' },
        { value: 'Successful', label: 'Successful' },
        { value: 'Failed', label: 'Failed' }
    ]

    const customStyles = {
        control: (provided) => ({
            ...provided,
            cursor: "pointer",
            color: "#e5e7eb",
            background: 'transparent',
            borderColor: "#e5e7eb",
            borderWidth: "2px",
            borderRadius: "12px",
            minHeight: '48px',
            minWidth: "150px",
            padding: "0px 2px"
        })
    };

    return (
        <div className='flex flex-col'>
            <div className="container p-6 mx-auto">
                <PageTitle Title={"Transactions"} />
                <div className='flex flex-col gap-y-6'>
                    <div className='flex px-10 py-2 bg-white border border-white rounded-2xl'>
                        <div className="w-full max-w-lg px-4">
                            <div className="relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-[#aaa]"
                                />
                            </div>
                        </div>
                        <div>
                            <Select
                                className='flex'
                                isSearchable
                                styles={customStyles}
                                options={options}
                                placeholder='Select...' />
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='flex px-10 py-5 bg-white border border-white rounded-2xl'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transactions