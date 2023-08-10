import React, { createContext, useContext, useState } from 'react';

const DashbaordContext = createContext();

const initialState = {
    chat: false,
    userProfile: false,
    notification: false,
};

export const DashboardProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

    return (
        <DashbaordContext.Provider value={{ activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu }}>
            {children}
        </DashbaordContext.Provider>
    );
};

export const UseStateContext = () => useContext(DashbaordContext);