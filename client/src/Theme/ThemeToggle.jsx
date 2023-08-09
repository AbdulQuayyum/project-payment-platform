import React from 'react'
import { FaSun, FaMoon } from "react-icons/fa"
import { ThemeContext } from '../Contexts/ThemeContext'

const Toggler = () => {
    const { theme, setTheme } = React.useContext(ThemeContext)

    return (
        <div className="transition duration-500 ease-in-out flex justify-center items-center">
            {theme === 'dark' ? (
                <FaSun
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gray-500 dark:text-gray-50 transition-all duration-500 w-[28px] h-[28px] md:w-[30px] md:h-[30px] flex justify-center items-center cursor-pointer"
                />
            ) : (
                <FaMoon
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-[#1c1c24] dark:text-gray-50 transition-all duration-500 w-[28px] h-[28px] md:w-[30px] md:h-[30px] flex justify-center items-center cursor-pointer"
                />
            )}
        </div>
    )
}

export default Toggler