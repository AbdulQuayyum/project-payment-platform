import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select'

import AuthLayout from '../../Layouts/Auth.Layout'
import CountryRawData from "../../Data/Country.json"
import IDRawData from "../../Data/IdType.json"
import { RegisterUser } from '../../APIs/Users.api'

const Register = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [identityNumber, setIdentityNumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [countryData, setCountryData] = useState([]);
    const [IdTypeData, setIdTypeData] = useState([])
    const [country, setCountry] = useState(null);
    const [IdType, setIdType] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        var count = Object.keys(CountryRawData).length;
        let countryArray = [];
        for (var i = 0; i < count; i++) {
            countryArray.push({
                value: CountryRawData[i].country_code,
                label: CountryRawData[i].country_name,
            });
        }
        setCountryData(countryArray);
    }, [])

    const FetchIdTypes = (countryCode) => {
        // Filter the data array based on the countryCode
        const filteredIdTypes = IDRawData.filter(item => item.country_code === countryCode);

        // Map the filtered results to get an array of objects with label and value properties
        const idTypes = filteredIdTypes.map(item => ({
            label: item.id_type.replace(/_/g, ' '), // Replace underscores with spaces
            value: item.id_type
        }));

        // Set the IdTypeData state with the filtered ID types
        setIdTypeData(idTypes);

    }

    const HandleLoadIdData = (countryCode) => {
        FetchIdTypes(countryCode);
    }

    const customStyles = {
        control: (provided) => ({
            ...provided,
            cursor: "pointer",
            color: "#e5e7eb",
            background: 'transparent',
            borderColor: "#e5e7eb",
            borderWidth: "2px",
            borderRadius: "12px",
            minHeight: '48px',
            padding: "0px 2px"
        })
    };

    function TogglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }

    function ToggleConfirmPasswordVisibility() {
        setIsConfirmPasswordVisible((prevState) => !prevState);
    }

    const SubmitValues = async ({ firstName, lastName, email, phone, address, identityNumber, password, country, IdType }) => {
        try {
            const response = await RegisterUser({ firstName, lastName, email, phone, address, identityNumber, password, country, IdType })
            if (response.success) {
                alert(response.message)
                navigate("/Login")
            }
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <AuthLayout>
            <div className='flex flex-col border-2 border-[#aaa] rounded-3xl py-5 sm:py-10 px-6 sm:px-14'>
                <div className='flex flex-col gap-y-4'>
                    <span className='font-extrabold text-2xl sm:text-5xl text-[#aaa]'>Let's get started</span>
                    <span className='text-[#aaa]'>Please enter the following information to continue</span>
                </div>
                <div className='flex-col flex sm:grid sm:grid-cols-2 gap-x-6'>
                    <div className='my-4'>
                        <span className='font-extrabold  text-[#aaa]'>First Name</span>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Ajani"
                            className="w-full p-2 text-lg transition-all duration-500 border-2 border-gray-200 outline-none rounded-xl dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                        />
                    </div>
                    <div className='my-4'>
                        <span className='font-extrabold  text-[#aaa]'>Last Name</span>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Ajanlekoko"
                            className="w-full p-2 text-lg transition-all duration-500 border-2 border-gray-200 outline-none rounded-xl dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                        />
                    </div>
                </div>
                <div className='flex-col flex sm:grid sm:grid-cols-2 gap-x-6'>
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
                        <span className='font-extrabold  text-[#aaa]'>Phone Number</span>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="080 123 4565"
                            className="w-full p-2 text-lg transition-all duration-500 border-2 border-gray-200 outline-none rounded-xl dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                        />
                    </div>
                </div>
                <div className='flex-col flex sm:grid sm:grid-cols-2 gap-x-6'>
                    <div className='my-4'>
                        <label
                            htmlFor="country"
                            className="font-extrabold text-[#aaa]"
                        >
                            Select a Country
                        </label>
                        <Select
                            isSearchable
                            value={country}
                            options={countryData}
                            styles={customStyles}
                            placeholder='Select a country...'
                            getOptionLabel={(countryData) => countryData.label}
                            getOptionValue={(countryData) => countryData.value}
                            onChange={item => {
                                HandleLoadIdData(item.value)
                                setCountry(item);
                            }}
                        />
                    </div>
                    <div className='my-4'>
                        <label
                            htmlFor="idtype"
                            className="font-extrabold text-[#aaa]"
                        >
                            Select an ID Type
                        </label>
                        <Select
                            isSearchable
                            options={IdTypeData}
                            styles={customStyles}
                            placeholder="Select an ID Type..."
                            value={IdType}
                            onChange={(item) => setIdType(item)}
                            getOptionLabel={(IdTypeData) => IdTypeData.label}
                            getOptionValue={(IdTypeData) => IdTypeData.value} />
                    </div>
                </div>
                <div className='flex-col flex sm:grid sm:grid-cols-2 gap-x-6'>
                    <div className='my-4'>
                        <span className='font-extrabold  text-[#aaa]'>Identity Number</span>
                        <input
                            type="text"
                            disabled={!IdType ? true : false}
                            value={identityNumber}
                            onChange={(e) => setIdentityNumber(e.target.value)}
                            placeholder={IdType ? `Enter the ${IdType.label} number` : "Choose an Identity Type"}
                            className="w-full p-2 text-lg transition-all duration-500 border-2 border-gray-200 outline-none rounded-xl dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white disabled:cursor-not-allowed"
                        />
                    </div>
                    <div className='my-4'>
                        <span className='font-extrabold  text-[#aaa]'>Address</span>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="blah blah blah"
                            className="w-full p-2 text-lg transition-all duration-500 border-2 border-gray-200 outline-none rounded-xl dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                        />
                    </div>
                </div>
                <div className='flex-col flex sm:grid sm:grid-cols-2 gap-x-6'>
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
                    <div className='my-4'>
                        <span className='font-extrabold  text-[#aaa]'>Confirm Password</span>
                        <div className="relative">
                            <input
                                type={isConfirmPasswordVisible ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="********"
                                className="w-full p-2 text-lg transition-all duration-500 border-2 border-gray-200 outline-none rounded-xl dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
                            />
                            <button
                                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                onClick={ToggleConfirmPasswordVisibility}
                            >
                                {isConfirmPasswordVisible ? (
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
                </div>
                <div className='flex w-full my-4'>
                    <button
                        onClick={SubmitValues}
                        className='w-full px-8 py-3 text-sm text-white transition-all bg-black border border-black rounded-full hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>
                        Register
                    </button>
                </div>
                <div className='flex justify-end mt-4'>
                    <Link to='/Login'>
                        <span className='text-[#aaa] hover:text-[#000]'>Access your Account</span>
                    </Link>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Register