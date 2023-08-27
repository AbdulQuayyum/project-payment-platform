import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from "react-redux"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { LuCopy } from "react-icons/lu"
import { TbDownload } from "react-icons/tb"
import QRCode from 'qrcode';

import { PageTitle } from '../../Components/Index';

const DashboardHome = () => {
  const { user } = useSelector((state) => state.users)
  const [imageUrl, setImageUrl] = useState('')

  const GenerateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(user?._id);
      // console.log(response);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GenerateQrCode()
  }, [])

  return (
    <div className=''>
      <div className="container flex flex-col mx-auto">
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
            <div className='flex flex-col items-center justify-center h-full p-6 bg-white border border-gray-200 rounded-lg shadow gap-y-4'>
              <span className='text-[#aaa] font-extrabold'>Your QR Code </span>
              {imageUrl ? (
                <>
                  <img src={imageUrl} alt="Your QR Code" />
                  <a className='flex px-5 py-2 text-sm text-black transition-all bg-white border border-black rounded-full gap-x-2 hover:text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white' href={imageUrl} download="Account QR Code">
                    <span className='font-extrabold'>Download</span>
                    < TbDownload size={20} />
                  </a>
                </>
              ) : null}
              <span className='text-[#aaa] font-extrabold'>Scan the QR Code to make payment </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome