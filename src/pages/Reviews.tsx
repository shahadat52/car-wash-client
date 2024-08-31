// ReviewSection.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
// import { StarIcon } from '@heroicons/react/24/outline';
import { FaRegStar } from "react-icons/fa"; // For star icons

interface ReviewFormData {
    feedback: string;
    rating: number;
}

const ReviewSection: React.FC = () => {
    const { control, handleSubmit, reset } = useForm<ReviewFormData>();
    const [showOverlay] = React.useState(false);
    const [userLoggedIn, setUserLoggedIn] = React.useState<boolean>(false); // Simulate user authentication state

    const onSubmit = (data: ReviewFormData) => {
        // Handle form submission
        console.log('Submitted data:', data);
        reset(); // Reset form after submission
    };

    React.useEffect(() => {
        // Simulate user login check
        setUserLoggedIn(true); // Change based on actual login state
    }, []);

    return (
        <div className="relative">
            {showOverlay && !userLoggedIn && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                    <button
                        onClick={() => {
                            // Redirect to login page
                            window.location.href = '/login';
                        }}
                        className="bg-white text-black px-4 py-2 rounded shadow"
                    >
                        Login
                    </button>
                </div>
            )}

            <div className={`p-4 ${showOverlay && !userLoggedIn ? 'opacity-50' : 'opacity-100'}`}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="feedback" className="block text-lg font-medium text-gray-700">Feedback</label>
                        <Controller
                            name="feedback"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <textarea
                                    {...field}
                                    id="feedback"
                                    rows={4}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter your feedback..."
                                />
                            )}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-lg font-medium text-gray-700">Rating</label>
                        <Controller
                            name="rating"
                            control={control}
                            defaultValue={0}
                            render={({ field }) => (
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, index) => (
                                        <FaRegStar
                                            key={index}
                                            className={`h-6 w-6 cursor-pointer ${field.value > index ? 'text-yellow-600' : 'text-gray-300'}`}
                                            onClick={() => field.onChange(index + 1)}
                                        />
                                    ))}
                                </div>
                            )}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                    >
                        Submit Review
                    </button>
                </form>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold">Overall Rating: 4.5</h2> {/* Example average rating */}
                    <div className="mt-4 space-y-4">
                        {/* <div className="border p-4 rounded-md">
                            <h3 className="font-semibold">User 1</h3>
                            <p className="text-gray-700">"Great service!"</p>
                            <div className="flex items-center">
                                {[...Array(5)].map((_, index) => (
                                    <FaRegStar
                                        key={index}
                                        className={`h-4 w-4 ${4 > index ? 'text-yellow-500' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="border p-4 rounded-md">
                            <h3 className="font-semibold">User 2</h3>
                            <p className="text-gray-700">"Very satisfied with the experience."</p>
                            <div className="flex items-center">
                                {[...Array(5)].map((_, index) => (
                                    <FaRegStar
                                        key={index}
                                        className={`h-4 w-4 ${3 > index ? 'text-yellow-500' : 'text-gray-300'}`}

                                    />
                                ))}
                            </div>
                        </div> */}


                    </div>
                    <button
                        onClick={() => window.location.href = '/reviews'}
                        className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                    >
                        See All Reviews
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;
