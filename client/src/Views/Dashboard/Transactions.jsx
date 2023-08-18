import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Select from 'react-select'
import toast from 'react-hot-toast';
import { CgSearch } from "react-icons/cg"

import { PageTitle, TransferFundsModal } from '../../Components/Index';
import { GetAllTransactionsByUser } from '../../APIs/Transactions.Api';

const Transactions = () => {
    const { user } = useSelector((state) => state.users)
    const [data = [], setData] = useState([])
    const [showTransaferFundsModal, setShowTransaferFundsModal] = useState(false)
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
            const response = await GetAllTransactionsByUser()
            if (response.success) {
                setData(response.data)
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
                <PageTitle Title={"Transactions"} />
                <div className='flex flex-col gap-y-6'>
                    <div className='flex justify-between px-10 py-2 bg-white border border-white rounded-2xl'>
                        <div className="w-full max-w-sm px-4">
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
                                    placeholder="Search transaction"
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
                        <div className='flex gap-x-4'>
                            <button
                                className='w-full px-8 py-3 text-sm text-white transition-all bg-black border border-black rounded-full hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                                Deposit
                            </button>
                            <button
                                onClick={() => setShowTransaferFundsModal(true)}
                                className='w-full px-8 py-3 text-sm text-black transition-all bg-white border border-black rounded-full hover:text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                                Transfer
                            </button>
                        </div>
                    </div>
                    <div className='relative flex px-10 py-5 overflow-x-auto bg-white border border-white shadow-md rounded-2xl'>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Date
                                    </th>
                                    {/* <th scope="col" className="px-6 py-3">
                                        Transaction ID
                                    </th> */}
                                    <th scope="col" className="px-6 py-3">
                                        Amount
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Type
                                    </th>
                                    {/* <th scope="col" className="px-6 py-3">
                                        Reference Account
                                    </th> */}
                                    <th scope="col" className="px-6 py-3">
                                        Reference
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((items, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        {/* <td className="px-6 py-4">
                                        Blah Blah Blah
                                    </td>
                                    <td className="px-6 py-4">
                                        Blah Blah Blah
                                    </td> */}
                                        <td className="px-6 py-4">
                                            {items.createdAt}
                                        </td>
                                        <td className="px-6 py-4">
                                            {items.Amount}
                                        </td>
                                        <td className="px-6 py-4">
                                            Blah Blah Blah
                                        </td>
                                        <td className="px-6 py-4">
                                            {items.Reference}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={ items.Status === "Success" ? "text-green-800 bg-green-50 py-[2px] px-4 rounded-2xl" : "text-red-800 bg-red-50 py-[2px] px-4 rounded-2xl"}>

                                            {items.Status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {showTransaferFundsModal && <TransferFundsModal showTransaferFundsModal={showTransaferFundsModal} setShowTransaferFundsModal={setShowTransaferFundsModal} />}
        </div>
    )
}

export default Transactions