import React from "react";
import { useTheme } from "../context/ThemeContext";


export default function Home() {

  const {isDarkMode} = useTheme()

  return (
  <div className={`flex justify-center items-center h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
    <div className={`p-8 rounded-2xl shadow-lg w-[450px] text-center border ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}>
      
      {/* Display Question */}
      <div className="text-2xl mb-6 font-semibold">Q1: Question goes here</div>

      {/* Display Options */}
      <ul className="space-y-4">
        {["Option 1", "Option 2", "Option 3", "Option 4"].map((option, index) => (
          <li key={index} className={`w-full text-xl py-3 rounded-lg cursor-pointer transition-all duration-300 ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"}`}>
            {option}
          </li>
        ))}
      </ul>

      {/* Next Button */}
      <button className={`mt-6 text-xl py-3 px-6 rounded-lg shadow-md ${isDarkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"} text-white`}>
        Next
      </button>
    </div>
  </div>
  );
}

