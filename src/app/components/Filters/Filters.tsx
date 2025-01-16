import React from 'react';

const Filters: React.FC = () => {
    return (
        <div className="bg-gray-50 p-4 rounded-md shadow-md mt-4">
            <div className="flex items-center gap-4">
                {/* Filter Icon */}
                <button className="text-gray-600">
                    <i className="fas fa-filter"></i> Filter By
                </button>

                {/* Dropdowns */}
                <select className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Date</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                </select>
                <select className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Order Type</option>
                    <option>Type 1</option>
                    <option>Type 2</option>
                </select>
                <select className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Order Status</option>
                    <option>Completed</option>
                    <option>Pending</option>
                </select>

                {/* Reset Button */}
                    <button className="text-red-600 bg-white flex items-center gap-1 border border-gray-300 px-3 py-1 rounded-md shadow-sm hover:bg-gray-100">
                        <i className="fas fa-redo-alt"></i> Reset Filter
                    </button>

                    


            </div>
        </div>
    );
};

export default Filters;
