import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

import { DashboardNavbar, Sidebar } from "../Components/Index";
import { UseStateContext } from "../Contexts/DashboardContext";

export const DashboardLayout = ({ children }) => {
    const { user } = useSelector((state) => state.users)
    const location = useLocation();
    const { activeMenu } = UseStateContext();

    useEffect(() => {
        document.querySelector("html").style.scrollBehavior = "auto";
        window.scroll({ top: 0 });
        document.querySelector("html").style.scrollBehavior = "";
    }, [location.pathname]); // triggered on route change

    return (
        <div>
            <div className="relative flex min-h-screen transition-all duration-150 bg-[#f8f8f8] dark:bg-[#111827]">
                {activeMenu ? (
                    <div className="fixed bg-white w-72 sidebar dark:bg-[#283046]">
                        <Sidebar user={user} />
                    </div>
                ) : (
                    <div className="w-0 bg-none">
                        <Sidebar user={user} />
                    </div>
                )}
                <div
                    className={
                        activeMenu
                            ? "h-full xl:ml-72 w-full"
                            : "h-full w-full"
                    }
                >
                    <div className="w-full xl:static navbar ">
                        <DashboardNavbar user={user} />
                    </div>
                    <div className="z-40 p-4 onboard">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
