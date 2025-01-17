// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import Slidebar from "@/app/components/Slidebar/Slidebar";
// import { CategoryScale, Chart as ChartJS, ChartOptions, Filler, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
// import annotationPlugin from "chartjs-plugin-annotation";
// import { useEffect, useRef } from 'react';
// import { Line } from 'react-chartjs-2';
// import { BsEmojiSmile } from "react-icons/bs";
// import { FaBell, FaCalendarAlt } from "react-icons/fa";

// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Title, Tooltip,Legend);

// ChartJS.register(annotationPlugin);


// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler // For gradient background
// );

// const LineChart = () => {
//   const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//     datasets: [
//       {
//         label: "Teal Line",
//         data: [3000, 4000, 2500, 6000, 8000, 7000, 9000],
//         borderColor: "#36d7b7", // Teal color
//         backgroundColor: (context: { chart: { ctx: any; }; }) => {
//           const ctx = context.chart.ctx;
//           const gradient = ctx.createLinearGradient(0, 0, 0, 400);
//           gradient.addColorStop(0, "rgba(54, 215, 183, 0.4)");
//           gradient.addColorStop(1, "rgba(54, 215, 183, 0)");
//           return gradient;
//         },
//         fill: true,
//         tension: 0.4, // Curve smoothing
//       },
//       {
//         label: "Black Line",
//         data: [1000, 2000, 1500, 3000, 4000, 3500, 4500],
//         borderColor: "#000000", // Black color
//         backgroundColor: "rgba(0, 0, 0, 0.1)",
//         fill: false,
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         enabled: true,
//         callbacks: {
//           label: (context: any) => {
//             return `${context.raw} views`;
//           },
//         },
//       },
//       annotation: {
//         annotations: {
//           highlight: {
//             type: "box", // Explicitly defined type
//             xMin: 6,
//             xMax: 6,
//             yMin: 0,
//             yMax: 9000,
//             backgroundColor: "rgba(54, 215, 183, 0.5)",
//             borderWidth: 0,
//             label: {
//               content: "8,760",
//               enabled: true,
//               position: "center",
//             },
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//       y: {
//         min: 0,
//         max: 10000,
//         ticks: {
//           stepSize: 2000,
//         },
//       },
//     },
//   };


//   return <Line data={data} options={options} />;
// };


// export default function Home() {
//     const chartRef = useRef(null);

//   useEffect(() => {
//     const chart = chartRef.current;
//     if (chart) {
//       const ctx = chart.ctx;

//       // Gradient for Dataset 1
//       const gradient1 = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
//       gradient1.addColorStop(0, 'rgba(13, 86, 36, 1)');
//       gradient1.addColorStop(1, 'rgba(177, 185, 248, 0)');

//       // Gradient for Dataset 2
//       const gradient2 = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
//       gradient2.addColorStop(0, 'rgba(100, 132, 11, 1)');
//       gradient2.addColorStop(1, 'rgba(244, 167, 157, 0)');

//       chart.data.datasets[0].backgroundColor = gradient1;
//       chart.data.datasets[1].backgroundColor = gradient2;
//       chart.update();
//     }
//   }, []);

//   const data = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: [65, 59, 80, 81, 56, 55, 40, 60, 75, 85, 95, 100],
//         borderColor: 'rgba(13, 86, 36, 1)', 
//         borderWidth: 2,
//         fill: true,
//         pointRadius: 0, 
//         pointHoverRadius: 0, 
//       },
//       {
//         label: 'Dataset 2',
//         data: [40, 45, 60, 70, 46, 35, 20, 50, 65, 70, 80, 85],
//         borderColor: 'rgba(100, 132, 11, 1)', 
//         borderWidth: 2,
//         fill: true,
//         pointRadius: 0, 
//         pointHoverRadius: 0, 
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         enabled: true,
//         callbacks: {
//           label: (context) => `${context.raw} views`,
//         },
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//       y: {
//         beginAtZero: true,
//         grid: {
//           display: true,
//         },
//         ticks: {
//           stepSize: 20,
//         },
//       },
//     },
//   };

//   return (
//     <div className="flex bg-gray-100 min-h-screen">
//       {/* Sidebar */}
//       <Slidebar />

//       {/* Main Content */}
//       <div className="flex-1 ml-64">
//         {/* Top Navigation Bar */}
//         <div className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
//           {/* Search Input */}
//           <div className="flex items-center space-x-2">
//             <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
//               <img
//                 src="https://xp99dtac6k.ufs.sh/f/9senG9WLDt3PomtY5gIMERpGxQjmLkAlcSeIPOr7NqaKWvCD"
//                 alt="Search Icon"
//                 className="w-6 h-6"
//               />
//             </div>
//             <input
//               type="text"
//               placeholder="Search here....."
//               className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center space-x-4">
//             <button className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600">
//               + Add Cylinders
//             </button>
//             <div className="relative">
//               <FaBell className="text-gray-500 text-xl cursor-pointer" />
//               <div className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//                 2
//               </div>
//             </div>
//             <div className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center">
//               <span className="text-white font-bold">S</span>
//             </div>
//           </div>
//         </div>

//         {/* Dashboard Header */}
//         <div className="px-8 py-6 bg-white shadow-md mt-4 rounded-lg">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-2xl font-semibold">Hello, Subham 👋</h1>
//               <p className="text-gray-600">
//                 There is the latest update for the last 6 days. Check now
//               </p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <FaCalendarAlt className="text-gray-500" />
//               <span className="text-gray-600">
//                 Wednesday, 1st January, 2025
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Statistics Cards */}
//         <div className="grid grid-cols-5 gap-4 px-8 py-6">
//           {[
//             {
//               label: "Cylinders",
//               value: "20,000",
//               img: "https://xp99dtac6k.ufs.sh/f/9senG9WLDt3P6DoGJiCPA0NWsVTuiGOkEXbIodeyf4928U5R",
//             },
//             {
//               label: "Active Cylinders",
//               value: "16,000",
//               img: "https://xp99dtac6k.ufs.sh/f/9senG9WLDt3P21snwkWVj7lbVUFX5tRWnO4oM6098fY3KNdP",
//             },
//             {
//               label: "Inactive Cylinders",
//               value: "2,000",
//               img: "https://xp99dtac6k.ufs.sh/f/9senG9WLDt3PQpzFGPZcG6fUWhOv9HsZ21rwS5PXtLDg7nRa",
//             },
//             {
//               label: "Empty Cylinders",
//               value: "2,000",
//               img: "https://xp99dtac6k.ufs.sh/f/9senG9WLDt3PG9KmLqS2S4e6nO9zu80ZpTF3iDAoXQEUJbrv",
//             },
//             {
//               label: "Tanks Refilling",
//               value: "2,000",
//               img: "https://xp99dtac6k.ufs.sh/f/9senG9WLDt3PsGqu4t10zfF4P98rycJlXWownQLVs2iYH1dZ",
//             },
//           ].map((item, index) => (
//             <div key={index} className="relative bg-white p-7 rounded-md group">
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-b from-[#113B47]/90 to-[#22A682]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md mix-blend-multiply pointer-events-none"></div>
//               <h3 className="text-lg mb-3 font-bold">{item.label}</h3>
//               <div
//                 className={`flex flex-row items-center justify-center gap-3 rounded-lg shadow-sm`}>
//                 <div className="mt-[-1rem]">
//                   <p className="text-2xl text-center font-bold">{item.value}</p>
//                 </div>
//                 <img
//                   src={item.img}
//                   alt={item.label}
//                   className="w-25 h-20 mb-[-2.3rem]"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Graph and Notification Section */}
//         <div className="grid grid-cols-3 gap-4 px-8 py-6">
//           {/* Graph Card */}
//           <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
//             <div className="flex justify-between items-center">
//               <h2 className="text-lg font-bold">Weekly Overview</h2>
//               <div className="flex items-center space-x-2">
//                 <BsEmojiSmile className="text-green-800 text-lg" />
//                 <span>20 views</span>
//                 <span className="text-gray-400">Monday, Jan 22nd</span>
//               </div>
//             </div>
//             <div className="relative mt-4">
//               <div className="absolute top-12 right-24 z-10">
//                 <svg
//                   width="40"
//                   height="204"
//                   viewBox="0 0 40 204"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg">
//                   <rect
//                     x="0.0999756"
//                     y="0.687622"
//                     width="39.2273"
//                     height="202.728"
//                     rx="19.6136"
//                     fill="url(#paint0_linear_0_1)"
//                   />
//                   <path
//                     d="M28.861 56.6648C28.861 60.9833 24.9183 64.7465 19.7136 64.7465C14.5089 64.7465 10.5662 60.9833 10.5662 56.6648C10.5662 52.3463 14.5089 48.5831 19.7136 48.5831C24.9183 48.5831 28.861 52.3463 28.861 56.6648Z"
//                     fill="black"
//                     stroke="white"
//                     stroke-width="3"
//                   />
//                   <defs>
//                     <linearGradient
//                       id="paint0_linear_0_1"
//                       x1="19.7136"
//                       y1="0.687622"
//                       x2="19.7136"
//                       y2="203.415"
//                       gradientUnits="userSpaceOnUse">
//                       <stop stop-color="#31C2A9" />
//                       <stop offset="0.11" stop-color="#2EB79F" />
//                       <stop offset="0.25" stop-color="#2AA993" />
//                       <stop offset="0.405" stop-color="#269985" />
//                       <stop offset="0.595" stop-color="#218574" />
//                       <stop offset="0.735" stop-color="#1E7768" />
//                       <stop offset="0.84" stop-color="#1B6C5E" />
//                       <stop offset="0.925" stop-color="#196457" />
//                       <stop offset="1" stop-color="#175C50" />
//                     </linearGradient>
//                   </defs>
//                 </svg>
//               </div>
//               <LineChart />
//             </div>
//           </div>

//           {/* Notification Card */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-lg font-bold">Notifications</h2>
//             <ul className="mt-4 space-y-4">
//               {[
//                 {
//                   time: "5:00 PM",
//                   message: "1001 Cylinder is Running Low: Refill Soon...",
//                 },
//                 {
//                   time: "6:15 PM",
//                   message:
//                     "1006 Device Sensor Error: Unable to Detect Oxygen Levels. Inspect Sensor System Immediately!",
//                 },
//               ].map((notification, index) => (
//                 <li
//                   key={index}
//                   className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center space-x-4 relative">
//                   {/* Green Indicator */}
//                   <div className="absolute left-0 top-0 h-full w-1 bg-green-500 rounded-l-lg"></div>
//                   <div className="text-sm text-gray-500">
//                     {notification.time}
//                   </div>
//                   <div className="flex-1 text-gray-700">
//                     {notification.message}
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Additional Section */}
//         <div className="grid grid-cols-3 gap-4 px-8 py-6">
//           {/* Empty Card */}
//           <div className="bg-white p-6 rounded-lg shadow-md w-full h-[330px]"></div>

//           {/* Empty Card */}
//           <div className="bg-white p-6 rounded-lg shadow-md w-full h-[330px]"></div>

//           {/* Graph Overview Card */}
//           <div className="bg-white p-6 rounded-lg shadow-md w-full h-[330px]">
//             <h2 className="text-lg font-bold">Revenue Overview</h2>
//             <p className="text-sm text-gray-500">Dec 1 - Dec 31</p>
//             <div className="relative mt-4">
//               {/* revenue graph */}
//               <Line ref={chartRef} data={data} options={options} />
//             </div>
//             <div className="flex justify-between items-center mt-2">
//               <div className="flex items-center space-x-2">
//                 <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                 <span className="text-sm text-gray-600">O₂</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                 <span className="text-sm text-gray-600">?</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Slidebar from "@/app/components/Slidebar/Slidebar";
import {
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { BsEmojiSmile } from "react-icons/bs";
import { FaBell, FaCalendarAlt } from "react-icons/fa";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin
);





// LineChart Component
const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Teal Line",
        data: [3000, 4000, 2500, 6000, 8000, 7000, 9000],
        borderColor: "#36d7b7", // Teal color
        backgroundColor: (context: { chart: { ctx: CanvasRenderingContext2D } }) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(54, 215, 183, 0.4)");
          gradient.addColorStop(1, "rgba(54, 215, 183, 0)");
          return gradient;
        },
        fill: true,
        tension: 0.4, // Curve smoothing
      },
      {
        label: "Black Line",
        data: [1000, 2000, 1500, 3000, 4000, 3500, 4500],
        borderColor: "#000000", // Black color
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            return `${context.raw} views`;
          },
        },
      },
      annotation: {
        annotations: {
          highlight: {
            type: "box" as const, // Explicitly set the type to "box"
            xMin: 6,
            xMax: 6,
            yMin: 0,
            yMax: 9000,
            backgroundColor: "rgba(54, 215, 183, 0.5)",
            borderWidth: 0,
            label: {
              content: "8,760",
              position: "center" as const,
            },
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 10000,
        ticks: {
          stepSize: 2000,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};



// Home Component
export default function Home() {
  const chartRef = useRef<ChartJS<"line">>(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;

      // Gradient for Dataset 1
      const gradient1 = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      gradient1.addColorStop(0, "rgba(13, 86, 36, 1)");
      gradient1.addColorStop(1, "rgba(177, 185, 248, 0)");

      // Gradient for Dataset 2
      const gradient2 = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      gradient2.addColorStop(0, "rgba(100, 132, 11, 1)");
      gradient2.addColorStop(1, "rgba(244, 167, 157, 0)");

      chart.data.datasets[0].backgroundColor = gradient1;
      chart.data.datasets[1].backgroundColor = gradient2;
      chart.update();
    }
  }, []);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40, 60, 75, 85, 95, 100],
        borderColor: "rgba(13, 86, 36, 1)",
        borderWidth: 2,
        fill: true,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
      {
        label: "Dataset 2",
        data: [40, 45, 60, 70, 46, 35, 20, 50, 65, 70, 80, 85],
        borderColor: "rgba(100, 132, 11, 1)",
        borderWidth: 2,
        fill: true,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `${context.raw} views`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
        },
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Slidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
          {/* Search Input */}
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

          {/* Right Section */}
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

        {/* Dashboard Header */}
        <div className="px-8 py-6 bg-white shadow-md mt-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold">Hello, Subham 👋</h1>
              <p className="text-gray-600">
                There is the latest update for the last 6 days. Check now
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="text-gray-500" />
              <span className="text-gray-600">Wednesday, 1st January, 2025</span>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-5 gap-4 px-8 py-6">
          {[
            {
              label: "Cylinders",
              value: "20,000",
              img: "https://xp99dtac6k.ufs.sh/f/9senG9WLDt3P6DoGJiCPA0NWsVTuiGOkEXbIodeyf4928U5R",
            },
            {
              label: "Active Cylinders",
              value: "16,000",
              img: "https://xp99dtac6k.ufs.sh/f/9senG9WLDt3P21snwkWVj7lbVUFX5tRWnO4oM6098fY3KNdP",
            },
            {
              label: "Inactive Cylinders",
              value: "2,000",
              img: "https://xp99dtac6k.ufs.sh/f/9senG9WLDt3PQpzFGPZcG6fUWhOv9HsZ21rwS5PXtLDg7nRa",
            },
            {
              label: "Empty Cylinders",
              value: "2,000",
              img: "https://xp99dtac6k.ufs.sh/f/9senG9WLDt3PG9KmLqS2S4e6nO9zu80ZpTF3iDAoXQEUJbrv",
            },
            {
              label: "Tanks Refilling",
              value: "2,000",
              img: "https://xp99dtac6k.ufs.sh/f/9senG9WLDt3PsGqu4t10zfF4P98rycJlXWownQLVs2iYH1dZ",
            },
          ].map((item, index) => (
            <div key={index} className="relative bg-white p-7 rounded-md group">
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#113B47]/90 to-[#22A682]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md mix-blend-multiply pointer-events-none"></div>
              <h3 className="text-lg mb-3 font-bold">{item.label}</h3>
              <div className={`flex flex-row items-center justify-center gap-3 rounded-lg shadow-sm`}>
                <div className="mt-[-1rem]">
                  <p className="text-2xl text-center font-bold">{item.value}</p>
                </div>
                <img src={item.img} alt={item.label} className="w-25 h-20 mb-[-2.3rem]" />
              </div>
            </div>
          ))}
        </div>

        {/* Graph and Notification Section */}
        <div className="grid grid-cols-3 gap-4 px-8 py-6">
          {/* Graph Card */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Weekly Overview</h2>
              <div className="flex items-center space-x-2">
                <BsEmojiSmile className="text-green-800 text-lg" />
                <span>20 views</span>
                <span className="text-gray-400">Monday, Jan 22nd</span>
              </div>
            </div>
            <div className="relative mt-4">
              <div className="absolute top-12 right-24 z-10">
                <svg
                  width="40"
                  height="204"
                  viewBox="0 0 40 204"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.0999756"
                    y="0.687622"
                    width="39.2273"
                    height="202.728"
                    rx="19.6136"
                    fill="url(#paint0_linear_0_1)"
                  />
                  <path
                    d="M28.861 56.6648C28.861 60.9833 24.9183 64.7465 19.7136 64.7465C14.5089 64.7465 10.5662 60.9833 10.5662 56.6648C10.5662 52.3463 14.5089 48.5831 19.7136 48.5831C24.9183 48.5831 28.861 52.3463 28.861 56.6648Z"
                    fill="black"
                    stroke="white"
                    strokeWidth="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_0_1"
                      x1="19.7136"
                      y1="0.687622"
                      x2="19.7136"
                      y2="203.415"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#31C2A9" />
                      <stop offset="0.11" stopColor="#2EB79F" />
                      <stop offset="0.25" stopColor="#2AA993" />
                      <stop offset="0.405" stopColor="#269985" />
                      <stop offset="0.595" stopColor="#218574" />
                      <stop offset="0.735" stopColor="#1E7768" />
                      <stop offset="0.84" stopColor="#1B6C5E" />
                      <stop offset="0.925" stopColor="#196457" />
                      <stop offset="1" stopColor="#175C50" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <LineChart />
            </div>
          </div>

          {/* Notification Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Notifications</h2>
            <ul className="mt-4 space-y-4">
              {[
                {
                  time: "5:00 PM",
                  message: "1001 Cylinder is Running Low: Refill Soon...",
                },
                {
                  time: "6:15 PM",
                  message:
                    "1006 Device Sensor Error: Unable to Detect Oxygen Levels. Inspect Sensor System Immediately!",
                },
              ].map((notification, index) => (
                <li
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center space-x-4 relative"
                >
                  {/* Green Indicator */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-green-500 rounded-l-lg"></div>
                  <div className="text-sm text-gray-500">{notification.time}</div>
                  <div className="flex-1 text-gray-700">{notification.message}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Section */}
        <div className="grid grid-cols-3 gap-4 px-8 py-6">
          {/* Empty Card */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full h-[330px]"></div>

          {/* Empty Card */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full h-[330px]"></div>

          {/* Graph Overview Card */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full h-[330px]">
            <h2 className="text-lg font-bold">Revenue Overview</h2>
            <p className="text-sm text-gray-500">Dec 1 - Dec 31</p>
            <div className="relative mt-4">
              {/* Revenue Graph */}
              <Line ref={chartRef} data={data} options={options} />
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">O₂</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-600">?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}