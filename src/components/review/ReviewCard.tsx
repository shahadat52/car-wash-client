import { FaRegStar } from 'react-icons/fa';

const ReviewCard = () => {
    return (
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
        </div>
    );
};

export default ReviewCard;