import { usePDF } from "react-to-pdf";
import { useNavigate, useLocation } from "react-router";
import { useEffect } from "react";

import QuestionItem from "./QuestionItem";

import { useGenerateQuestions } from "../hooks/useGenerateQuestions";

export default function Questions() {
  const { toPDF, targetRef } = usePDF({ filename: 'exit-questions.pdf' });

  const navigate = useNavigate();

  const location = useLocation();
  const selections = location?.state;

  const { questions, regenerate } = useGenerateQuestions(selections);

  const regenerateHandler = () => {
    regenerate();
  }


  return (
    <div
   
      className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
        <div 
        className="mx-auto"
        ref={targetRef}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-800">Your Exit Interview Questions</h1>
          <div className="text-sm text-gray-500">
            <span className="font-medium">Position:</span> {selections.position} |
            <span className="font-medium ml-2">Department:</span> {selections.department} |
            <span className="font-medium ml-2">Tenure:</span> {selections.tenure}
          </div>
        </div>

        <div 
           className="bg-blue-50 rounded-md p-4 mb-6">
          <p className="text-sm text-blue-800 text-center">
            These questions are tailored based on your profile.
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {questions.map((question, index) => <QuestionItem key={question.id} content={question.question} questionNumber={index + 1} />)}

        </div>
        </div>


        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-between items-center pt-4 border-t border-gray-200">
          <div className="flex gap-3">
            <button
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center"
              onClick={() => (navigate('/profile'))}
            >
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <button
              onClick={regenerateHandler}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Regenerate
            </button>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => toPDF()}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
              Export PDF
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 flex items-center">
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Copy All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}