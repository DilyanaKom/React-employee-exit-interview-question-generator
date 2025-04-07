export default function WelcomeScreen() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <div className="bg-blue-50 rounded-md p-5 mb-6">
                    <h1 className="text-xl font-bold text-center text-gray-800">Exit Interview</h1>
                    <p className="text-sm text-center text-gray-600">Your feedback helps us improve</p>
                </div>
                <div className="mb-6">
                    <p className="font-semibold text-gray-800">Time required: ~8 minutes</p>
                </div>
                <div className="mb-8">
                    <p className="font-medium text-gray-800 mb-1">Your responses are:</p>
                    <ul className="ml-5 text-gray-600 space-y-1">
                        <li className="flex items-start">
                            <svg class="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                                <circle cx="11" cy="11" r="11" class="fill-sky-400/25" />
                                <circle cx="11" cy="11" r="10.5" class="stroke-sky-400/25" />
                                <path d="M8 11.5L10.5 14L14 8" class="stroke-sky-800 dark:stroke-sky-300" />
                            </svg>
                            <p className="ml-3">Confidential</p>

                        </li>
                        <li className="flex items-start">
                            <svg class="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                                <circle cx="11" cy="11" r="11" class="fill-sky-400/25" />
                                <circle cx="11" cy="11" r="10.5" class="stroke-sky-400/25" />
                                <path d="M8 11.5L10.5 14L14 8" class="stroke-sky-800 dark:stroke-sky-300" />
                            </svg>
                            <p className="ml-3">Anonymous in reports</p>

                        </li>
                        <li className="flex items-start">
                        <svg class="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                                <circle cx="11" cy="11" r="11" class="fill-sky-400/25" />
                                <circle cx="11" cy="11" r="10.5" class="stroke-sky-400/25" />
                                <path d="M8 11.5L10.5 14L14 8" class="stroke-sky-800 dark:stroke-sky-300" />
                            </svg>
                            <p className="ml-3">  Used to improve workplace </p>
                          
                        </li>
                    </ul>
                </div>
                <button
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-full transition duration-200 mb-4"
                >
                    Get Started
                </button>
            </div>
        </div>
    )
}