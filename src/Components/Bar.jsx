import React from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import { useTheme } from '../context/ThemeContext';

export default function Bar() {

  const {isDarkMode, toggleTheme} = useTheme()

  return (
    <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
            {/* Top Bar */}
            <div className={`flex flex-col sm:flex-row justify-between items-center p-4 shadow-md 
                ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`}>
                
                <h1 className="flex text-xl font-bold mx-auto sm:text-2xl md:text-3xl justify-center flex-grow ">Quiz App</h1>
                
                {/* Dark Mode Button with Icon */}
                <button
                    onClick={toggleTheme}
                    className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 ml-auto"
                >
                    {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                </button>
            </div>
    </div>

  )
}
