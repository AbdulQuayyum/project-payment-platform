import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import toast from 'react-hot-toast';
import { MdCloseFullscreen } from "react-icons/md"

const DepositModal = ({ showDepositModal, setShowDepositModal, ReloadData }) => {
    const [amount, setAmount] = useState("")

    const HandleDeposit = () => {
        try {
            if (!amount) {
                toast.error("Please put an amount.", { duration: 4000, position: 'top-right' })
                return;
            } else {
                toast.success("Working on This Feature.", { duration: 2000, position: 'top-right' })
                setShowDepositModal(false)
                ReloadData()
            }

        } catch (error) {
            toast.error(error.message, { duration: 4000, position: 'top-right' })
            setShowDepositModal(false)
        }
    }

    return (
        <div className={showDepositModal ? "deposit-modal active-deposit-modal" : "deposit-modal"}>
            <div className="deposit-modal-content dark:bg-[#1c1c24]">
                < MdCloseFullscreen className='deposit-modal-close dark:text-[#fff]' onClick={() => setShowDepositModal(false)} />
                <div>
                    <div className='my-4'>
                        <span className='font-extrabold  text-[#aaa]'>Amount</span>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Amount you want to deposit"
                            className="w-full p-2 text-lg transition-all duration-500 border-[2px] border-gray-100 outline-none rounded-xl dark:bg-transparent dark:border-[2px] dark:rounded1lg dark:border-white"
                        />
                    </div>
                </div>
                <div className='flex justify-end gap-x-4'>
                    <button
                        className='px-8 py-3 text-sm text-white transition-all bg-black border border-black rounded-full hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                        Cancel
                    </button>
                    <button
                        onClick={HandleDeposit}
                        className='px-8 py-3 text-sm text-black transition-all bg-white border border-black rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                        Deposit now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DepositModal