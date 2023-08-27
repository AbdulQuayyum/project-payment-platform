import React from 'react'
import toast from 'react-hot-toast';
import { useSelector } from "react-redux"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { LuCopy } from "react-icons/lu"

import { PageTitle } from '../../Components/Index';

const DashboardHome = () => {
  const { user } = useSelector((state) => state.users)

  return (
    <div className=''>
      <div className="mx-auto flex flex-col container">
        <PageTitle Title={"Overview"} />
        <div className='my-4'>
          <span className='font-extrabold text-2xl md:text-[40px] text-[#aaa]'>Welcome back, {user?.FirstName}</span>
        </div>
        <div className="flex flex-col items-stretch lg:flex-row">
          <div className="flex-1 p-4">
            <div className='flex flex-col h-full p-6 bg-white border border-gray-200 rounded-lg shadow gap-y-4'>
              <div className='flex flex-col justify-between min-[500px]:flex-row'>
                <span className='text-[#aaa] font-extrabold'>Account Name:</span>
                <span className='text-[#aaa]'>{user?.FirstName} {user?.LastName}</span>
              </div>
              <div className='flex flex-col justify-between min-[500px]:flex-row'>
                <span className='text-[#aaa] font-extrabold'>Account Number:</span>
                <div className='flex items-center gap-x-2'>
                  <span className='text-[#aaa]'>{user?._id}</span>
                  <CopyToClipboard
                    onCopy={() => { toast.success("Account Number copied successfully", { duration: 2000, position: 'top-right' }) }}
                    className="cursor-pointer" text={user?._id}>
                    <LuCopy color='#aaa' />
                  </CopyToClipboard>
                </div>
              </div>
              <div className='flex flex-col justify-between min-[500px]:flex-row'>
                <span className='text-[#aaa] font-extrabold'>Account Balance:</span>
                <span className='text-[#aaa]'>₦{user?.Balance}</span>
              </div>
            </div>
          </div>
          <div className="flex-1 p-4">
            <div className='flex flex-col h-full p-6 bg-white border border-gray-200 rounded-lg shadow gap-y-4'>
              <span>This is where the QR Code would be...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome