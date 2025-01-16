import React from 'react';
import { FaBell } from 'react-icons/fa';

const Topbar: React.FC = () => {
    return (
        <div className="flex items-center justify-between px-8 py-4 bg-white p-4 shadow-md">
            {/* Search Bar */}
            <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <img
                                src="https://xp99dtac6k.ufs.sh/f/9senG9WLDt3PomtY5gIMERpGxQjmLkAlcSeIPOr7NqaKWvCD"
                                alt="Search Icon"
                                className="w-6 h-6"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Search here....."
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

            {/* Add Cylinders Button */}
            <div className="flex items-center space-x-4">
                                    <button className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600">
                                        + Add Cylinders
                                    </button>
                                    <div className="relative">
                                        <FaBell className="text-gray-500 text-xl cursor-pointer" />
                                        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                                            2
                                        </div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center">
                                        <span className="text-white font-bold">S</span>
                                    </div>
                                </div>
        </div>
    );
};

export default Topbar;
