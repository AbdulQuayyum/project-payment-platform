import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { TbArrowBigLeftLines, TbListDetails } from "react-icons/tb"
import { RxDashboard } from "react-icons/rx"
import { PiUserList, PiArrowsLeftRightBold } from "react-icons/pi"
import { FaRegUser } from "react-icons/fa"
import { CgLogOut } from "react-icons/cg"

import Logo from "/logo.png"
import { UseStateContext } from "../../Contexts/DashboardContext"

const Sidebar = ({ user }) => {
  const { activeMenu, setActiveMenu, screenSize } = UseStateContext();

  const HandleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center px-4 py-2 my-2 text-[#000] border-l-4 border-[#000] transition-all duration-500 bg-[#e5e7eb] rounded-r-full dark:bg-gray-700 dark:text-gray-200";
  const normalLink =
    "flex items-center px-4 py-2 my-2 text-gray-400 transition-all duration-500 transform rounded-md dark:text-gray-400 hover:bg-[$F4F4F5] hover:text-black dark:hover:bg-gray-700 dark:hover:text-gray-200";

  return (
    <div className="flex flex-col min-h-screen py-2 sm:py-4 w-72 dark:border-gray-600">
      {activeMenu && (
        <>
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={HandleCloseSideBar}
              className="text-3xl font-semibold text-gray-800 dark:text-white"
            >
              <img src={Logo} className="w-10 h-10 ml-10" alt="" />
            </Link>
            <div content="Menu" position="Center">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                className="items-center block p-3 text-xl rounded-full hover:bg-light-gray md:hidden"
              >
                <TbArrowBigLeftLines size={24} />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between flex-1 h-screen mt-2">
            <div className="flex flex-col justify-between mt-10 h-[85vh]">
              <div className="">
                <NavLink
                  to="/Dashboard"
                  onClick={HandleCloseSideBar}
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  <RxDashboard size={22} className="ml-4" />
                  <span className="py-2 mx-4 text-lg font-semibold">Home</span>
                </NavLink>
                {user?.IsAdmin ? (
                  <NavLink
                    to="/Users"
                    onClick={HandleCloseSideBar}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <PiUserList size={22} className="ml-4" />
                    <span className="py-2 mx-4 text-lg font-semibold">Users</span>
                  </NavLink>
                ) : <></>
                }
                <NavLink
                  to="/Transactions"
                  onClick={HandleCloseSideBar}
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  <PiArrowsLeftRightBold size={22} className="ml-4" />
                  <span className="py-2 mx-4 text-lg font-semibold">Transactions</span>
                </NavLink>
                <NavLink
                  to="/Requests"
                  onClick={HandleCloseSideBar}
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  <TbListDetails size={22} className="ml-4" />
                  <span className="py-2 mx-4 text-lg font-semibold">Requests</span>
                </NavLink>
                <NavLink
                  to="/D"
                  onClick={HandleCloseSideBar}
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  <FaRegUser size={22} className="ml-4" />
                  <span className="py-2 mx-4 text-lg font-semibold">Profile</span>
                </NavLink>
              </div>
              <div className="mb-10 sm:mb-0">
                <NavLink
                  to="/Login"
                  onClick={() => { localStorage.removeItem("Token") }}
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  <CgLogOut size={22} className="ml-4" />
                  <span className="py-2 mx-4 text-lg font-semibold">Logout</span>
                </NavLink>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar