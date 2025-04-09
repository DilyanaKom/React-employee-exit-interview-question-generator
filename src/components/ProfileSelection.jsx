import { useNavigate } from 'react-router';
import { useState } from 'react';


export default function ProfileSelection() {
    const [selections, setSelections] = useState({
        position: '',
        department:'',
        tenure: '',
        reason:'',

    })
    const navigate = useNavigate();

    const handleSelect = (e) => {
        const {id, value} = e.target;
        setSelections(prev => ({
            ...prev,
            [id]: value
        }))
    };

    const handleContinue = () => {
        navigate('/questions', {
            state: selections
        })
    }

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
                                value={selections.position}
                                onChange={handleSelect}
                                className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                            >
                                <option value="" disabled hidden>Select position type</option>
                                <option value="individual_contributor">Individual Contributor</option>
                                <option value="manager">Manager</option>
                                <option value="director">Director</option>
                                <option value="executive">Executive</option>
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
                                onChange={handleSelect}
                                value={selections.department}
                                className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                            >
                                <option value="" disabled hidden >Select department</option>
                                <option value="engineering">Engineering</option>
                                <option value="product">Product</option>
                                <option value="design">Design</option>
                                <option value="marketing">Marketing</option>
                                <option value="sales">Sales</option>
                                <option value="support">Customer Support</option>
                                <option value="operations">Operations</option>
                                <option value="hr">Human Resources</option>
                                <option value="finance">Finance</option>
                                <option value="other">Other</option>
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
                                onChange={handleSelect}
                                value={selections.tenure}
                                className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                            >
                                <option value="" disabled hidden >Select tenure</option>
                                <option value="less_than_1">Less than 1 year</option>
                                <option value="1_to_3">1-3 years</option>
                                <option value="3_to_5">3-5 years</option>
                                <option value="5_to_10">5-10 years</option>
                                <option value="more_than_10">More than 10 years</option>
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
                                onChange={handleSelect}
                                value={selections.reason}
                                className="block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                            >
                                <option value="" disabled hidden>Select primary reason</option>
                                <option value="new_opportunity">Better opportunity elsewhere</option>
                                <option value="compensation">Compensation</option>
                                <option value="worklife">Work-life balance</option>
                                <option value="management">Management/leadership issues</option>
                                <option value="career_growth">Lack of career growth</option>
                                <option value="company_direction">Company direction/strategy</option>
                                <option value="relocation">Relocation</option>
                                <option value="retirement">Retirement</option>
                                <option value="other">Other</option>
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
                            onClick={handleContinue}
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