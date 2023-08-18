import React from 'react'
import { MdCloseFullscreen } from "react-icons/md"

const TransferFundsModal = ({ showTransaferFundsModal, setShowTransaferFundsModal, ReloadData }) => {

    return (
        <div className={showTransaferFundsModal ? "services-modal active-modal" : "services-modal"}>
            <div className="services-modal-content dark:bg-[#1c1c24]">
                < MdCloseFullscreen className='services-modal-close dark:text-[#fff]' onClick={() => setShowTransaferFundsModal(false)} />
                <div>
                    <div className='my-4'>
                        <span className='font-extrabold  text-[#aaa]'>Amount</span>
                        <input
                            type="number"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            placeholder="Amount you want to transfer"
                            className="w-full p-2 text-lg transition-all duration-500 border-2 border-gray-200 outline-none rounded-xl dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                        />
                    </div>
                    <div className='my-4'>
                        <span className='font-extrabold  text-[#aaa]'>Account number</span>
                        <input
                            type="tel"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            placeholder="Account you want to send to"
                            className="w-full p-2 text-lg transition-all duration-500 border-2 border-gray-200 outline-none rounded-xl dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                        />
                    </div>
                    <div className='my-4'>
                        <span className='font-extrabold  text-[#aaa]'>Description</span>
                        <input
                            type="text"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            placeholder="Transfer description"
                            className="w-full p-2 text-lg transition-all duration-500 border-2 border-gray-200 outline-none rounded-xl dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                        />
                    </div>
                    <div className='flex justify-end gap-x-4'>
                        <button
                            className='px-8 py-3 text-sm text-white transition-all bg-black border border-black rounded-full hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                            Cancel
                        </button>
                        <button
                            className='px-8 py-3 text-sm text-black transition-all bg-white border border-black rounded-full hover:text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransferFundsModal