import React, { useEffect } from "react"
import { FaRegUser } from "react-icons/fa"
import { HiMenuAlt2 } from "react-icons/hi"
import { IoNotificationsOutline } from "react-icons/io5"

import { Notification, UserProfile } from "../Index"
import { UseStateContext } from "../../Contexts/DashboardContext"

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <div content={title} position="BottomCenter">
        <button
            type="button"
            onClick={() => customFunc()}
            style={{ color }}
            className="relative p-3 text-xl rounded-full hover:bg-light-gray"
        >
            <span
                style={{ background: dotColor }}
                className="absolute inline-flex w-2 h-2 rounded-full right-3 top-3"
            />
            {icon}
        </button>
    </div>
);

const DashboardNavbar = () => {
    const { activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = UseStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    const HandleActiveMenu = () => setActiveMenu(!activeMenu);
    return (
        <div className="relative flex justify-between p-2 bg-white dark:bg-[#283046] dark:border-gray-700">
            <NavButton
                title="Menu"
                customFunc={HandleActiveMenu}
                icon={<HiMenuAlt2 className="mt-1 dark:text-white lg:hidden" />}
            />
            <div className="flex">
                <NavButton
                    title="Notification"
                    dotColor="#FF0202"
                    customFunc={() => handleClick("notification")}
                    icon={<IoNotificationsOutline size={30} className="dark:text-white" />}
                />
                <div content="Profile" position="BottomCenter">
                    <div
                        className="flex items-center gap-2 pl-1 pr-2 rounded-lg cursor-pointer sm:pl-5 sm:pr-10 hover:bg-light-gray"
                        onClick={() => handleClick("userProfile")}
                    >
                        <>
                            < FaRegUser className="w-10 h-10 border-[#20ABB7] border-2 rounded-full" />
                            <div className="flex flex-col">
                                <p>
                                    <span className="ml-1 font-bold text-black text-14">
                                        Ayinla
                                    </span>
                                </p>
                            </div>

                        </>
                    </div>
                </div>
                {isClicked.notification && <Notification />}
                {isClicked.userProfile && <UserProfile />}
            </div>
        </div>
    )
}

export default DashboardNavbar