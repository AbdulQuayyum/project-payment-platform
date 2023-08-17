import React from 'react'
import { MdCloseFullscreen } from "react-icons/md"

const TransferFundsModal = ({ showTransaferFundsModal, setShowTransaferFundsModal, ReloadData }) => {

    return (
        <div className={showTransaferFundsModal ? "services-modal active-modal" : "services-modal"}>
            <div className="services-modal-content dark:bg-[#1c1c24]">
                < MdCloseFullscreen className='services-modal-close dark:text-[#fff]' onClick={() => setShowTransaferFundsModal(false)} />
                <h3 className="dark:text-[#fff]">
                    Frontend Engineer
                </h3>
            </div>
        </div>
    )
}

export default TransferFundsModal