import React, { useState } from 'react'
import { MdCloseFullscreen } from "react-icons/md"

const TransferFundsModal = ({ showTransaferFundsModal, setShowTransaferFundsModal, ReloadData }) => {
    const [receiver, setReceiver] = useState()
    const [amount, setAmount] = useState()
    const [description, setDescription] = useState()
    const [isVerified, setIsVerified] = useState(false)

    const VerifyAccount = async () => { }

    return (
        <div className={showTransaferFundsModal ? "services-modal active-modal" : "services-modal"}>
            <div className="services-modal-content dark:bg-[#1c1c24]">
                < MdCloseFullscreen className='services-modal-close dark:text-[#fff]' onClick={() => setShowTransaferFundsModal(false)} />
                <div>
                    <div className='my-4'>
                        <span className='font-extrabold  text-[#aaa]'>Amount</span>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Amount you want to transfer"
                            className="w-full p-2 text-lg transition-all duration-500 border-[2px] border-gray-100 outline-none rounded-xl dark:bg-transparent dark:border-[2px] dark:rounded1lg dark:border-white"
                        />
                    </div>
                    <div className='my-4'>
                        <span className='font-extrabold  text-[#aaa]'>Account number</span>
                        <input
                            type="tel"
                            value={receiver}
                            onChange={(e) => {
                                setReceiver(e.target.value)
                                VerifyAccount()
                            }}
                            placeholder="Account you want to send to"
                            className="w-full p-2 text-lg transition-all duration-500 border-[2px] border-gray-100 outline-none rounded-xl dark:bg-transparent dark:border-[2px] dark:rounded1lg dark:border-white"
                        />
                        {isVerified && (
                            <div>
                                <span className='text-sm text-green-600'>Account verfiied</span>
                            </div>
                        )}
                    </div>
                    <div className='my-4'>
                        <span className='font-extrabold  text-[#aaa]'>Description</span>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Transfer description"
                            className="w-full p-2 text-lg transition-all duration-500 border-[2px] border-gray-100 outline-none rounded-xl dark:bg-transparent dark:border-[2px] dark:rounded1lg dark:border-white"
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