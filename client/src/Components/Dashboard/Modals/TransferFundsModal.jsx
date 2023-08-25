import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import toast from 'react-hot-toast';
import { MdCloseFullscreen } from "react-icons/md"

import { VerifyAccount, TransferFunds } from '../../../APIs/Transactions.Api'
import { setReloadUser } from '../../../Redux/UsersSlice';

const TransferFundsModal = ({ showTransaferFundsModal, setShowTransaferFundsModal, ReloadData }) => {
    const { user } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const [receiver, setReceiver] = useState("")
    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")
    const [isVerified, setIsVerified] = useState("")

    const VerifyReceiver = async () => {
        try {
            const response = await VerifyAccount({ Receiver: receiver })
            if (response.success) {
                console.log("Success")
                setIsVerified("true")
            } else {
                setIsVerified("false")
                console.log("failed")
            }
        } catch (error) {
            setIsVerified("false")
        }
    }

    const HandleTransferFunds = async () => {
        try {
            if (amount > user.Balance) {
                toast.error("Insufficient balance", { duration: 4000, position: 'top-right' })
            } if (isVerified === "false") {
                toast.error("Invalid Account", { duration: 4000, position: 'top-right' })
            } if (description === "") {
                toast.error("Add a description for this transaction", { duration: 4000, position: 'top-right' })
            }
            const payload = {
                Amount: amount,
                Receiver: receiver,
                Reference: description,
                Sender: user._id,
                Status: "Success"
            }
            const response = await TransferFunds(payload)
            if (response.success) {
                ReloadData()
                setShowTransaferFundsModal(false)
                toast.success(response.message, { duration: 2000, position: 'top-right' })
                dispatch(setReloadUser(true))
            } else {
                toast.error(response.message, { duration: 2000, position: 'top-right' })
                setShowTransaferFundsModal(false)
            }
        } catch (error) {
            toast.error(error.message, { duration: 4000, position: 'top-right' })
            setShowTransaferFundsModal(false)
        }
    }

    return (
        <div className={showTransaferFundsModal ? "transfer-modal active-transfer-modal" : "transfer-modal"}>
            <div className="transfer-modal-content dark:bg-[#1c1c24]">
                < MdCloseFullscreen className='transfer-modal-close dark:text-[#fff]' onClick={() => setShowTransaferFundsModal(false)} />
                <div>
                    <div className='my-4'>
                        <span className='font-extrabold  text-[#aaa]'>Amount</span>
                        <input
                            max={user.Balance}
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Amount you want to transfer"
                            className="w-full p-2 text-lg transition-all duration-500 border-[2px] border-gray-100 outline-none rounded-xl dark:bg-transparent dark:border-[2px] dark:rounded1lg dark:border-white"
                        />
                        {amount > user.Balance && (
                            <div>
                                <span className='text-sm text-red-600'>Insufficient balance</span>
                            </div>
                        )}
                    </div>
                    <div className='my-4'>
                        <span className='font-extrabold  text-[#aaa]'>Account number</span>
                        <div className='flex gap-x-4'>
                            <input
                                type="tel"
                                value={receiver}
                                onChange={(e) => setReceiver(e.target.value)}
                                placeholder="Account you want to send to"
                                className="w-full p-2 text-lg transition-all duration-500 border-[2px] border-gray-100 outline-none rounded-xl dark:bg-transparent dark:border-[2px] dark:rounded1lg dark:border-white"
                            />
                            <button
                                onClick={VerifyReceiver}
                                className='px-8 py-3 text-sm text-black transition-all bg-white border border-black rounded-full hover:text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                                Verify
                            </button>

                        </div>
                        {isVerified === "true" && (
                            <div>
                                <span className='text-sm text-green-600'>Account verfied successfully</span>
                            </div>
                        )}
                        {isVerified === "false" && (
                            <div>
                                <span className='text-sm text-red-600'>Account verfication failed</span>
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
                        {description === "" && (
                            <div>
                                <span className='text-sm text-red-600'>Add a description</span>
                            </div>
                        )}
                    </div>
                    <div className='flex justify-end gap-x-4'>
                        <button
                            className='px-8 py-3 text-sm text-white transition-all bg-black border border-black rounded-full hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                            Cancel
                        </button>
                        <button
                            onClick={HandleTransferFunds}
                            // disabled={amount > user.Balance && isVerified && description === "" ? false : true}
                            className='px-8 py-3 text-sm text-black transition-all bg-white border border-black rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransferFundsModal