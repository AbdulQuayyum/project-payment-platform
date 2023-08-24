import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import toast from 'react-hot-toast';

import { PageTitle } from '../../Components/Index';

const Requests = () => {
    const [openTab, setOpenTab] = useState(1);

    return (
        <div className='flex flex-col'>
            <div className="container p-6 mx-auto">
                <PageTitle Title={"Transactions"} />
                <div>
                    <ul className="flex mt-10 mb-4">
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
                    <div className={openTab === 1 ? "block" : "hidden"}>
                        <div className='relative flex px-10 py-5 overflow-x-auto bg-white border border-white shadow-md rounded-2xl'>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Amount
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            From
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
                                    {/* {data?.map((items, index) => ( */}
                                    <tr
                                        // key={index} 
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4">
                                            Blah Blah Blah
                                        </td>
                                        <td className="px-6 py-4">
                                            Blah Blah Blah
                                        </td>
                                        <td className="px-6 py-4">
                                            Blah Blah Blah
                                        </td>
                                        <td className="px-6 py-4">
                                            Blah Blah Blah
                                        </td>
                                        <td className="px-6 py-4">
                                            Blah Blah Blah
                                        </td>
                                    </tr>
                                    {/* ))} */}
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
                                            Amount
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            From
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
                                    {/* {data?.map((items, index) => ( */}
                                    <tr
                                        // key={index} 
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4">
                                            Blah Blah Blah
                                        </td>
                                        <td className="px-6 py-4">
                                            Blah Blah Blah
                                        </td>
                                        <td className="px-6 py-4">
                                            Blah Blah Blah
                                        </td>
                                        <td className="px-6 py-4">
                                            Blah Blah Blah
                                        </td>
                                        <td className="px-6 py-4">
                                            Blah Blah Blah
                                        </td>
                                    </tr>
                                    {/* ))} */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Requests