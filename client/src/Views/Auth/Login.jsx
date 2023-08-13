import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

import AuthLayout from "../../Layouts/Auth.Layout.jsx"
import { LoginUser } from '../../APIs/Users.api.js'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const navigate = useNavigate()
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    )

    function TogglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }

    const SubmitValues = async () => {
        try {
            if (!email || !password) {
                toast.error("Please fill in all the required fields.", { duration: 4000, position: 'top-right' })
                return;
            }

            const response = await LoginUser({
                Email: email,
                Password: password
            })

            if (response.success) {
                toast.success(response.message, { duration: 2000, position: 'top-right' })
                async function nextPage() {
                    await delay(2000)
                    navigate("/Dashboard")
                }
                nextPage()
            }
        } catch (error) {
            toast.error(error.message, { duration: 4000, position: 'top-right' })
        }
    }

    return (
        <AuthLayout>
            <div className='flex flex-col border-2 border-[#aaa] rounded-3xl py-5 sm:py-10 px-6 sm:px-14'>
                <div className='flex flex-col gap-y-4'>
                    <span className='font-extrabold text-2xl sm:text-5xl text-[#aaa]'>Welcome back</span>
                    <span className='text-[#aaa]'>Please enter the following information to continue</span>
                </div>
                <div className='my-4'>
                    <span className='font-extrabold  text-[#aaa]'>Email Addresss</span>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="blahblah@gmail.com"
                        className="w-full p-2 text-lg transition-all duration-500 border-2 border-gray-200 outline-none rounded-xl dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                    />
                </div>
                <div className='my-4'>
                    <span className='font-extrabold  text-[#aaa]'>Password</span>
                    <div className="relative">
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="********"
                            className="w-full p-2 text-lg transition-all duration-500 border-2 border-gray-200 outline-none rounded-xl dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                        />
                        <button
                            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                            onClick={TogglePasswordVisibility}
                        >
                            {isPasswordVisible ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className='flex w-full my-4'>
                    <button
                        onClick={SubmitValues}
                        className='w-full px-8 py-3 text-sm text-white transition-all bg-black border border-black rounded-full hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                        Login
                    </button>
                </div>
                <div className='flex justify-end mt-4'>
                    <Link to='/Register'>
                        <span className='text-[#aaa] hover:text-[#000]'>Create an Account</span>
                    </Link>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Login