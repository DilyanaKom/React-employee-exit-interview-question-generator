export default function Questions(){
    return(
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
  <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-xl font-bold text-gray-800">Your Exit Interview Questions</h1>
      <div className="text-sm text-gray-500">
        <span className="font-medium">Position:</span> Manager • 
        <span className="font-medium ml-2">Department:</span> Engineering •
        <span className="font-medium ml-2">Tenure:</span> 1-3 years
      </div>
    </div>
    
    <div className="bg-blue-50 rounded-md p-4 mb-6">
      <p className="text-sm text-blue-800 text-center">
        These questions are tailored based on your profile.
      </p>
    </div>
    
    <div className="space-y-6 mb-8">
      {/* Question 1 */}
      <div className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
        <div className="flex justify-between">
          <h3 className="font-medium text-gray-800 mb-1">Question 1</h3>
        </div>
        <p className="text-gray-700">What were the primary factors that led to your decision to leave the company?</p>
      </div>
      
      {/* Question 2 */}
      <div className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
        <div className="flex justify-between">
          <h3 className="font-medium text-gray-800 mb-1">Question 2</h3>
        </div>
        <p className="text-gray-700">How would you describe the level of support you received to manage your team effectively?</p>
      </div>
      
      {/* Question 3 */}
      <div className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
        <div className="flex justify-between">
          <h3 className="font-medium text-gray-800 mb-1">Question 3</h3>
        </div>
        <p className="text-gray-700">What aspects of the engineering culture worked well, and what could be improved?</p>
      </div>
      
      {/* Question 4 */}
      <div className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
        <div className="flex justify-between">
          <h3 className="font-medium text-gray-800 mb-1">Question 4</h3>
        </div>
        <p className="text-gray-700">How would you rate the career growth opportunities for engineering managers at the company?</p>
      </div>
      
      {/* Question 5 */}
      <div className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
        <div className="flex justify-between">
          <h3 className="font-medium text-gray-800 mb-1">Question 5</h3>
        </div>
        <p className="text-gray-700">Did you feel the compensation and benefits package was competitive with the market?</p>
      </div>
      
      {/* Question 6 */}
      <div className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
        <div className="flex justify-between">
          <h3 className="font-medium text-gray-800 mb-1">Question 6</h3>
        </div>
        <p className="text-gray-700">What was your experience with work-life balance while managing your team?</p>
      </div>
      
      {/* Question 7 */}
      <div className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
        <div className="flex justify-between">
          <h3 className="font-medium text-gray-800 mb-1">Question 7</h3>
        </div>
        <p className="text-gray-700">How effective was communication from senior leadership about company direction and strategy?</p>
      </div>
      
      {/* Question 8 */}
      <div className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
        <div className="flex justify-between">
          <h3 className="font-medium text-gray-800 mb-1">Question 8</h3>
        </div>
        <p className="text-gray-700">What advice would you give to improve the experience for engineering managers?</p>
      </div>
    </div>
    
    {/* Action Buttons */}
    <div className="flex flex-wrap gap-4 justify-between items-center pt-4 border-t border-gray-200">
      <div className="flex gap-3">
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Regenerate
        </button>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
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