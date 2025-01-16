import Slidebar from '@/app/components/Slidebar/Slidebar';
import { FaCalendarAlt } from 'react-icons/fa';
import Filters from '../components/Filters/Filters';
import Topbar from '../components/Topbar/Topbar';

const Home: React.FC = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Slidebar />

            {/* Main Content */}
            <div className="flex-1 ml-64 p-4">
                
                {/* Topbar */}
                <Topbar />

               {/* Orders Section */}
                    <div className="flex items-center justify-between mt-4">
                        {/* Heading */}
                        <h1 className="text-2xl font-bold">Order Lists</h1>

                        {/* Date Display Button */}
                        <button className="flex items-center gap-2 text-sm text-black bg-white px-4 py-2 rounded-md shadow hover:bg-gray-700">
                            {/* <div className="flex items-center space-x-2"> */}
                            <FaCalendarAlt className="text-gray-500" />
                            <span className="text-gray-600">Wednesday, 1st January, 2025</span>
                        </button>
                    </div>


                {/* Filters */}
                <Filters />

                {/* Table */}
                <div className="mt-6 bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-white">
                            <tr>
                                <th className="px-6 py-3 border-b text-sm font-medium text-gray-600">ID</th>
                                <th className="px-6 py-3 border-b text-sm font-medium text-gray-600">NAME</th>
                                <th className="px-6 py-3 border-b text-sm font-medium text-gray-600">ADDRESS</th>
                                <th className="px-6 py-3 border-b text-sm font-medium text-gray-600">DATE</th>
                                <th className="px-6 py-3 border-b text-sm font-medium text-gray-600">TANK TYPE</th>
                                <th className="px-6 py-3 border-b text-sm font-medium text-gray-600">QUANTITY</th>
                                <th className="px-6 py-3 border-b text-sm font-medium text-gray-600">STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { id: '00001', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2024', type: 'Oxygen', quantity: '1000', status: 'New Order', color: 'bg-blue-100 text-blue-700' },
                                { id: '00002', name: 'Rosie Pearson', address: '979 Immanuel Ferry Suite 526', date: '28 May 2024', type: 'Hydrogen', quantity: '2700', status: 'Processing', color: 'bg-purple-100 text-purple-700' },
                                { id: '00003', name: 'Darrell Caldwell', address: '8587 Frida Ports', date: '23 Nov 2024', type: 'Oxygen', quantity: '3000', status: 'Rejected', color: 'bg-red-100 text-red-700' },
                                { id: '00004', name: 'Gilbert Johnston', address: '768 Destiny Lake Suite 600', date: '05 Feb 2024', type: 'Oxygen', quantity: '200', status: 'Completed', color: 'bg-green-100 text-green-700' },
                                { id: '00005', name: 'Alan Cain', address: '042 Mylene Throughway', date: '29 Jul 2024', type: 'Oxygen', quantity: '45000', status: 'New Order', color: 'bg-blue-100 text-blue-700' },
                                { id: '00006', name: 'Alfred Murray', address: '543 Weimann Mountain', date: '15 Aug 2024', type: 'Hydrogen', quantity: '2000', status: 'Completed', color: 'bg-green-100 text-green-700' },
                                { id: '00007', name: 'Maggie Sullivan', address: 'New Scottieberg', date: '21 Dec 2024', type: 'Hydrogen', quantity: '3200', status: 'Processing', color: 'bg-purple-100 text-purple-700' },
                                { id: '00008', name: 'Rosie Todd', address: 'New Jon', date: '30 Apr 2024', type: 'Oxygen', quantity: '7800', status: 'On Hold', color: 'bg-orange-100 text-orange-700' },
                                { id: '00009', name: 'Dollie Hines', address: '124 Lyla Forge Suite 975', date: '09 Jan 2024', type: 'Hydrogen', quantity: '2900', status: 'In Transit', color: 'bg-teal-100 text-teal-700' },
                            ].map((order) => (
                                <tr key={order.id} className="border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-700">{order.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{order.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{order.address}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{order.type}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{order.quantity}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 text-sm font-semibold rounded-full ${order.color}`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-between items-center p-4 bg-gray-100">
                        <p className="text-sm text-gray-600">Showing 1-9 of 60</p>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
                                &lt;
                            </button>
                            <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
