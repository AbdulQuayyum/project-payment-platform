import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Select from 'react-select'
import toast from 'react-hot-toast';
import { CgSearch } from "react-icons/cg"
import moment from "moment"

import { PageTitle, DepositModal, TransferFundsModal } from '../../Components/Index';
import { GetAllTransactionsByUser } from '../../APIs/Transactions.Api';

const Transactions = () => {
    const { user } = useSelector((state) => state.users)
    const [data = [], setData] = useState([])
    const [showTransaferFundsModal, setShowTransaferFundsModal] = useState(false)
    const [showDepositModal, setShowDepositModal] = useState(false)
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
                        <div className="flex items-center">
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
                        <div className='flex gap-x-4'>
                            <button
                                onClick={() => setShowDepositModal(true)}
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
                    <div className='flex px-10 py-5 overflow-x-auto bg-white border border-white shadow-md rounded-2xl'>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Transaction ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Amount
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Type
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Reference Account
                                    </th>
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
                                            {moment(items.createdAt).format('MMMM Do YYYY, h:mm:ss a')} {/* Format createdAt date */}
                                        </td>
                                        <td className="px-6 py-4">
                                            {items._id}
                                        </td>
                                        <td className="px-6 py-4">
                                            {items.Amount}
                                        </td>
                                        <td className="px-6 py-4">
                                            {items.Sender._id === user._id ? "Debit" : "Credit"}
                                        </td>
                                        <td className="px-6 py-4">
                                            {items.Sender._id === user._id ? <><span>{items.Receiver.FirstName} {items.Receiver.LastName}</span></> : <><span>{items.Sender.FirstName} {items.Sender.LastName}</span></>}
                                        </td>
                                        <td className="px-6 py-4">
                                            {items.Reference}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={items.Status === "Accept" || "Success" ? "text-green-800 bg-green-50 py-1 px-4 rounded-2xl" : (items.Status === "Reject" ? "text-red-800 bg-red-50 py-1 px-4 rounded-2xl" : "bg-yellow-100 text-yellow-700 py-1 px-4 rounded-2xl")}>
                                                {items.Status === "Accept" || "Success" ? "Success" : (items.Status === "Reject" ? "Rejected" : "Pending")}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {showTransaferFundsModal && <TransferFundsModal showTransaferFundsModal={showTransaferFundsModal} setShowTransaferFundsModal={setShowTransaferFundsModal} ReloadData={GetData} />}
            {showDepositModal && <DepositModal showDepositModal={showDepositModal} setShowDepositModal={setShowDepositModal} ReloadData={GetData} />}
        </div>
    )
}

export default Transactions