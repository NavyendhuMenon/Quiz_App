import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import questions from "../data/data";

export default function Home() {

  const {isDarkMode} = useTheme()

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const [currentScore, setCurrentScore] = useState(0)

  const [quizCompleted, setQuizCompleted] = useState(false)

  const [selectedOption, setSelectedOption] = useState(null)

  const nextQuestion = ()=>{

    if(currentQuestionIndex < questions.length-1){
      setCurrentQuestionIndex(currentQuestionIndex+1)
      setSelectedOption(null)
    }else[
      setQuizCompleted(true)
    ]

  }

  const currentQuestion = questions[currentQuestionIndex]

  const checkAnswer =(selectedOption)=>{

    setSelectedOption(selectedOption)

    if(selectedOption === currentQuestion.answer){
      setCurrentScore((prevScore)=>prevScore+1)
    }
  }


  

  return (
  <div className={`flex justify-center items-center h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
    <div className={`p-8 rounded-2xl shadow-lg w-[450px] text-center border ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}>
      
    {!quizCompleted ? (
          <>
            {/* Display Question */}
            <div className="text-2xl mb-6 font-semibold">
              {`Q.${currentQuestion.id} : ${currentQuestion.question}`}
            </div>

            {/* Display Options */}
            <ul className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <li
                  key={index}
                  className={`w-full text-xl py-3 rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedOption === option
                      ? isDarkMode
                        ? "bg-amber-400 text-white"
                        : "bg-amber-400 text-white"
                      : isDarkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => checkAnswer(option)}
                >
                  {option}
                </li>
              ))}
            </ul>

            {/* Next Button */}
            <button
              onClick={nextQuestion}
              disabled={selectedOption === null}
              className={`mt-6 text-xl py-3 px-6 rounded-lg shadow-md ${
                isDarkMode
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white`}
            >
              Next
            </button>
          </>
        ) : (
          <>
            {/* Show Final Score */}
            <h2 className="text-3xl font-bold mb-4">Quiz Completed! 🎉</h2>
            <p className="text-xl mb-4">Your Score: {currentScore} / {questions.length}</p>
            <button
              onClick={() => {
                setCurrentQuestionIndex(0);
                setCurrentScore(0);
                setQuizCompleted(false);
                setSelectedOption(null);

              }}
              className="mt-6 text-xl py-3 px-6 rounded-lg shadow-md bg-green-500 hover:bg-green-600 text-white"
            >
              Restart Quiz
            </button>
          </>
        )}
    </div>
  </div>
  );
}

