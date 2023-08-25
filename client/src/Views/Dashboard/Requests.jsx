import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Select from 'react-select'
import toast from 'react-hot-toast';

import { PageTitle, NewRequestModal } from '../../Components/Index';
import { GetAllRequestsByUser, UpdateRequestStatus } from "../../APIs/Request.Api"
import { setReloadUser } from '../../Redux/UsersSlice';

const Requests = () => {
    const { user } = useSelector((state) => state.users)
    const [data = [], setData] = useState([])
    const [openTab, setOpenTab] = useState(1);
    const [showNewRequestModal, setShowNewRequestModal] = useState(false)
    const dispatch = useDispatch()

    const GetData = async () => {
        try {
            const response = await GetAllRequestsByUser()
            if (response.success) {
                const NewSenderData = response.data.filter((item) => item.Sender._id === user._id)
                const NewReceiverData = response.data.filter((item) => item.Receiver._id === user._id)
                setData({ SentData: NewSenderData, ReceivedData: NewReceiverData })
            }
        } catch (error) {
            toast.error(error.message, { duration: 4000, position: 'top-right' })
        }
    }

    useEffect(() => {
        GetData()
    }, [])


    const UpdateStatus = async (items, Status) => {
        try {
            const response = await UpdateRequestStatus({ ...items, Status })
            if (response.success) {
                toast.success(response.message, { duration: 2000, position: 'top-right' })
                GetData()
                dispatch(setReloadUser(true))
            } else {
                toast.error(error.message, { duration: 4000, position: 'top-right' })
            }
        } catch (error) {
            toast.error(error.message, { duration: 4000, position: 'top-right' })
        }
    }

    return (
        <div className='flex flex-col'>
            <div className="container p-6 mx-auto">
                <PageTitle Title={"Requests"} />
                <div>
                    <div className='flex gap-y-4 flex-col sm:flex-row justify-between my-5 items-center'>
                        <ul className="flex ">
                            <li>
                                <a
                                    href="#"
                                    onClick={() => setOpenTab(1)}
                                    className={` ${openTab === 1 ? "border-[#000] border-b-2 text-[#000]" : ""} inline-block mx-6 cursor-pointer text-lg font-bold text-gray-[#aaa]`}  >
                                    Sent
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onClick={() => setOpenTab(2)}
                                    className={` ${openTab === 2 ? "border-[#000] border-b-2 text-[#000]" : ""} inline-block mx-6 cursor-pointer text-lg font-bold text-gray-[#aaa]`} >
                                    Recieved
                                </a>
                            </li>
                        </ul>
                        <div>
                            <button
                                onClick={() => setShowNewRequestModal(true)}
                                className='w-full px-8 py-3 text-sm text-black transition-all bg-white border border-black rounded-full hover:text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                                Request funds
                            </button>
                        </div>
                    </div>
                    <div className={openTab === 1 ? "block" : "hidden"}>
                        <div className='relative flex px-10 py-5 overflow-x-auto bg-white border border-white shadow-md rounded-2xl'>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            To
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Amount
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.SentData?.map((items, index) => (
                                        <tr
                                            key={index}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="px-6 py-4">
                                                {items._id}
                                            </td>
                                            <td className="px-6 py-4">
                                                <><span>{items.Receiver.FirstName} {items.Receiver.LastName}</span></>
                                            </td>
                                            <td className="px-6 py-4">
                                                {items.Amount}
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
                    <div className={openTab === 2 ? "block" : "hidden"}>
                        <div className='relative flex px-10 py-5 overflow-x-auto bg-white border border-white shadow-md rounded-2xl'>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            From
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Amount
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.ReceivedData?.map((items, index) => (
                                        <tr
                                            key={index}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="px-6 py-4">
                                                {items._id}
                                            </td>
                                            <td className="px-6 py-4">
                                                <><span>{items.Sender.FirstName} {items.Sender.LastName}</span></>
                                            </td>
                                            <td className="px-6 py-4">
                                                {items.Amount}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={items.Status === "Accept" || "Success" ? "text-green-800 bg-green-50 py-1 px-4 rounded-2xl" : (items.Status === "Reject" ? "text-red-800 bg-red-50 py-1 px-4 rounded-2xl" : "bg-yellow-100 text-yellow-700 py-1 px-4 rounded-2xl")}>
                                                    {items.Status === "Accept" || "Success" ? "Success" : (items.Status === "Reject" ? "Rejected" : "Pending")}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                {items.Status === "Pending" && items.Receiver._id === user._id ?
                                                    (
                                                        <div className='flex gap-x-4'>
                                                            <button
                                                                onClick={() => UpdateStatus(items, "Reject")}
                                                                className='w-full px-4 py-1 text-sm text-red-500 transition-all bg-white border border-red-500 rounded-full hover:text-white hover:bg-red-500 dark:bg-white dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white'>
                                                                Reject
                                                            </button>

                                                            <button
                                                                onClick={() => UpdateStatus(items, "Success")}
                                                                className='w-full px-4 py-1 text-sm text-green-500 transition-all bg-white border border-green-500 rounded-full hover:text-white hover:bg-green-500 dark:bg-white dark:text-green-500 dark:hover:bg-green-500 dark:hover:text-white'>
                                                                Accept
                                                            </button>
                                                        </div>
                                                    ) :
                                                    (
                                                        <></>
                                                    )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {showNewRequestModal && <NewRequestModal showNewRequestModal={showNewRequestModal} setShowNewRequestModal={setShowNewRequestModal} ReloadData={GetData} />}
        </div>
    )
}

export default Requests