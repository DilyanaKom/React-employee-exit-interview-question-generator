import { useNavigate } from 'react-router';


export default function ProfileSelection() {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h1 className="text-xl font-bold text-center text-gray-800 mb-6">Profile Selection</h1>

                <div className="space-y-6">
                    {/* Position Type */}
                    <div>
                        <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Position:
                        </label>
                        <div className="relative">
                            <select
                                id="position"
                                className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                            >
                                <option defaultValue="" selected disabled >Select position type</option>
                                <option defaultValue="individual_contributor">Individual Contributor</option>
                                <option defaultValue="manager">Manager</option>
                                <option defaultValue="director">Director</option>
                                <option defaultValue="executive">Executive</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Department */}
                    <div>
                        <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                            Department:
                        </label>
                        <div className="relative">
                            <select
                                id="department"
                                className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                            >
                                <option defaultValue="" selected disabled >Select department</option>
                                <option defaultValue="engineering">Engineering</option>
                                <option defaultValue="product">Product</option>
                                <option defaultValue="design">Design</option>
                                <option defaultValue="marketing">Marketing</option>
                                <option defaultValue="sales">Sales</option>
                                <option defaultValue="support">Customer Support</option>
                                <option defaultValue="operations">Operations</option>
                                <option defaultValue="hr">Human Resources</option>
                                <option defaultValue="finance">Finance</option>
                                <option defaultValue="other">Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Tenure */}
                    <div>
                        <label htmlFor="tenure" className="block text-sm font-medium text-gray-700 mb-1">
                            Tenure at Company:
                        </label>
                        <div className="relative">
                            <select
                                id="tenure"
                                className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                            >
                                <option defaultValue="" selected disabled >Select tenure</option>
                                <option defaultValue="less_than_1">Less than 1 year</option>
                                <option defaultValue="1_to_3">1-3 years</option>
                                <option defaultValue="3_to_5">3-5 years</option>
                                <option defaultValue="5_to_10">5-10 years</option>
                                <option defaultValue="more_than_10">More than 10 years</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Primary Reason for Leaving */}
                    <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                            Primary Reason for Leaving:
                        </label>
                        <div className="relative">
                            <select
                                id="reason"
                                className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                            >
                                <option defaultValue="" selected disabled>Select primary reason</option>
                                <option defaultValue="new_opportunity">Better opportunity elsewhere</option>
                                <option defaultValue="compensation">Compensation</option>
                                <option defaultValue="worklife">Work-life balance</option>
                                <option defaultValue="management">Management/leadership issues</option>
                                <option defaultValue="career_growth">Lack of career growth</option>
                                <option defaultValue="company_direction">Company direction/strategy</option>
                                <option defaultValue="relocation">Relocation</option>
                                <option defaultValue="retirement">Retirement</option>
                                <option defaultValue="other">Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="pt-4">
                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => navigate('/')}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                                Back
                            </button>
                            <button 
                            className="px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
                            
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}