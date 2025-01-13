
// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gradient-to-br from-green-800 to-green-600 text-white p-4">
//         <div className="text-2xl font-bold mb-6">GASONX</div>
//         <nav className="space-y-4">
//           <a href="#" className="flex items-center space-x-3 p-2 rounded-lg bg-green-700">
//             <span className="material-icons">dashboard</span>
//             <span>Dashboard</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 p-2 hover:bg-green-700 rounded-lg">
//             <span className="material-icons">live_tv</span>
//             <span>Live Data</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 p-2 hover:bg-green-700 rounded-lg">
//             <span className="material-icons">shopping_cart</span>
//             <span>Orders</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 p-2 hover:bg-green-700 rounded-lg">
//             <span className="material-icons">inventory</span>
//             <span>Stocks</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 p-2 hover:bg-green-700 rounded-lg">
//             <span className="material-icons">insights</span>
//             <span>Sales Insights</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 p-2 hover:bg-green-700 rounded-lg">
//             <span className="material-icons">location_on</span>
//             <span>Location</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 p-2 hover:bg-green-700 rounded-lg">
//             <span className="material-icons">build</span>
//             <span>Maintenance</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 p-2 hover:bg-green-700 rounded-lg">
//             <span className="material-icons">local_shipping</span>
//             <span>Logistics</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 p-2 hover:bg-green-700 rounded-lg">
//             <span className="material-icons">assessment</span>
//             <span>Reports</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 p-2 hover:bg-green-700 rounded-lg">
//             <span className="material-icons">settings</span>
//             <span>Settings</span>
//           </a>
//           <a href="#" className="flex items-center space-x-3 p-2 hover:bg-green-700 rounded-lg">
//             <span className="material-icons">logout</span>
//             <span>Logout</span>
//           </a>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="bg-white shadow p-4 flex justify-between items-center">
//           <div>
//             <input
//               type="text"
//               placeholder="Search here..."
//               className="border rounded-md p-2 w-64"
//             />
//           </div>
//           <div className="flex items-center space-x-4">
//             <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
//               + Add Cylinders
//             </button>
//             <span className="material-icons text-yellow-500">notifications</span>
//             <span className="material-icons">person</span>
//           </div>
//         </header>

//         {/* Main Dashboard */}
//         <main className="p-6 space-y-6">
//           {/* Welcome Section */}
//           <div>
//             <h1 className="text-xl font-semibold">Hello, Subham 👋</h1>
//             <p className="text-gray-500">There is the latest update for the last 6 days. Check now.</p>
//           </div>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-5 gap-4">
//             {[
//               { title: 'Cylinders', value: '20,000', icon: 'local_gas_station' },
//               { title: 'Active Cylinders', value: '16,000', icon: 'local_gas_station' },
//               { title: 'Inactive Cylinders', value: '2,000', icon: 'local_gas_station' },
//               { title: 'Empty Cylinders', value: '2,000', icon: 'local_gas_station' },
//               { title: 'Tanks Refilling', value: '2,000', icon: 'local_gas_station' },
//             ].map((stat, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white shadow rounded-lg p-4 flex items-center space-x-4"
//               >
//                 <span className="material-icons text-green-600 text-4xl">
//                   {stat.icon}
//                 </span>
//                 <div>
//                   <p className="text-lg font-bold">{stat.value}</p>
//                   <p className="text-gray-500">{stat.title}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Charts and Notifications */}
//           <div className="grid grid-cols-3 gap-4">
//             {/* Weekly Overview Chart */}
//             <div className="bg-white shadow rounded-lg p-4 col-span-2">
//               <h2 className="text-lg font-bold">Weekly Overview</h2>
//               <div className="mt-4">{/* Chart will go here */}</div>
//             </div>

//             {/* Notifications */}
//             <div className="bg-white shadow rounded-lg p-4">
//               <h2 className="text-lg font-bold">Notifications</h2>
//               <ul className="mt-4 space-y-2">
//                 {[
//                   '1001 Cylinder is Running Low: Refill Soon...',
//                   '1002 Device Sensor Error: Unable to Detect Oxygen Levels. Inspect Sensor System Immediately',
//                 ].map((notification, idx) => (
//                   <li
//                     key={idx}
//                     className="p-2 bg-gray-100 rounded-lg flex items-center space-x-2"
//                   >
//                     <span className="material-icons text-yellow-500">warning</span>
//                     <p className="text-sm text-gray-700">{notification}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Revenue Overview */}
//           <div className="grid grid-cols-3 gap-4">
//             <div className="bg-white shadow rounded-lg p-4 col-span-1">
//               <h2 className="text-lg font-bold">Revenue Overview</h2>
//               <div className="mt-4">{/* Revenue chart will go here */}</div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import Slidebar from '@/app/components/Slidebar/Slidebar';

export default function Home() {
    return (
        <div className="flex">
            <Slidebar />
            <main className="flex-1">Your main content here</main>
        </div>
    );
}
