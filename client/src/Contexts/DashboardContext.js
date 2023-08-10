import React, { createContext, useContext, useState } from 'react';

const DashbaordContext = createContext();

const initialState = {
    chat: false,
    userProfile: false,
    notification: false,
};

export const DashboardProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentMode, setCurrentMode] = useState('Light');
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

    return (
        <DashbaordContext.Provider value={{ currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentMode, setMode }}>
            {children}
        </DashbaordContext.Provider>
    );
};

export const useStateContext = () => useContext(DashbaordContext);