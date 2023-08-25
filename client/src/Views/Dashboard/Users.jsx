import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import toast from 'react-hot-toast';
import Select from 'react-select'
import { CgSearch } from "react-icons/cg"

import { PageTitle } from '../../Components/Index';
import { GetAllUsers } from "../../APIs/Users.Api"

const Users = () => {
    const [users, setUsers] = useState([])
    const dispatch = useDispatch()
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

    const GetData = async () => {
        try {
            const response = await GetAllUsers()
            if (response.success) {
                setUsers(response.data)
            } else {
                toast.error(error.message, { duration: 4000, position: 'top-right' })
            }

        } catch (error) {
            toast.error(error.message, { duration: 4000, position: 'top-right' })
        }
    }

    useEffect(() => {
        GetData()
    }, [])

    return (
        <div className='flex flex-col'>
            <div className="container p-6 mx-auto">
                <PageTitle Title={"Users"} />
                <div className='flex flex-col gap-y-6'>
                    <div className='flex justify-between px-10 py-2 bg-white border border-white rounded-2xl'>
                        <div className="flex relative items-center">
                            <input className="h-10 p-6 w-full sm:w-[500px] px-5 text-base bg-white border-1 border border-[#BDBDBD] rounded-2xl focus:outline-none"
                                type="search" name="search" placeholder="Search" />
                            <button type="submit" className="absolute right-0 mr-4">
                                <CgSearch />
                            </button>
                        </div>
                        <div>
                            <Select
                                className='flex'
                                isSearchable
                                styles={customStyles}
                                options={options}
                                placeholder='Select...' />
                        </div>
                    </div>
                    <div className='flex px-10 py-5 overflow-x-auto bg-white border border-white shadow-md rounded-2xl'>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        First Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Last Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Phone
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Verified
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.map((items, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4">
                                            {items.FirstName}
                                        </td>
                                        <td className="px-6 py-4">
                                            {items.LastName}
                                        </td>
                                        <td className="px-6 py-4">
                                            {items.Email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {items.PhoneNumber}
                                        </td>
                                        <td className="px-6 py-4">
                                            {items.IsVerified ? "Yes" : "No"}
                                        </td>
                                        <td className="px-6 py-4">
                                            {items.IsVerified ?
                                                <button
                                                    // onClick={() => UpdateStatus(items, "Reject")}
                                                    className='w-full px-4 py-1 text-sm text-red-500 transition-all bg-white border border-red-500 rounded-full hover:text-white hover:bg-red-500 dark:bg-white dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white'>
                                                    Suspend
                                                </button> :
                                                <button
                                                    // onClick={() => UpdateStatus(items, "Success")}
                                                    className='w-full px-4 py-1 text-sm text-green-500 transition-all bg-white border border-green-500 rounded-full hover:text-white hover:bg-green-500 dark:bg-white dark:text-green-500 dark:hover:bg-green-500 dark:hover:text-white'>
                                                    Activate
                                                </button>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users