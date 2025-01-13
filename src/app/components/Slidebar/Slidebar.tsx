// Sidebar.tsx
import React from 'react';
import { FaChartBar, FaCog, FaDatabase, FaFileAlt, FaMapMarkerAlt, FaShoppingCart, FaSignOutAlt, FaTachometerAlt, FaTools, FaTruck } from 'react-icons/fa';

const Sidebar: React.FC = () => {
    const menuItems = [
        {
            heading: "Menu",
            items: [
                { label: "Dashboard", icon: <FaTachometerAlt />, active: true },
                { label: "Live Data", icon: <FaDatabase />, active: false },
                { label: "Orders", icon: <FaShoppingCart />, active: false },
                { label: "Stocks", icon: <FaChartBar />, active: false },
                { label: "Sales Insights", icon: <FaChartBar />, active: false },
                { label: "Location", icon: <FaMapMarkerAlt />, active: false },
                { label: "Maintenance", icon: <FaTools />, active: false },
                { label: "Logistics", icon: <FaTruck />, active: false },
            ],
        },
        {
            heading: "Other Menu",
            items: [
                { label: "Reports", icon: <FaFileAlt />, active: false },
                { label: "Settings", icon: <FaCog />, active: false },
                { label: "Logout", icon: <FaSignOutAlt />, active: false },
            ],
        },
    ];

    return (
        <div className="w-64 h-screen bg-gradient-to-b from-[#0c3e48] to-[#165b62] text-white fixed rounded-tr-3xl rounded-br-3xl flex flex-col p-5">
            <div className="text-center font-bold text-2xl mb-8">
                <span className="text-[#4fe37b]">G</span>ASONX
            </div>

            {menuItems.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                    <div className="uppercase text-xs text-gray-400 pl-4 mb-3">{section.heading}</div>
                    <ul>
                        {section.items.map((item, itemIndex) => (
                            <li
                                key={itemIndex}
                                className={`
                                    flex items-center px-4 py-2 mb-2 rounded-lg cursor-pointer transition duration-300 
                                    ${item.active ? "bg-white/10 relative" : "hover:bg-white/10"}
                                `}
                            >
                                {item.active && (
                                    <div className="absolute h-full w-1 bg-[#4fe37b] left-0 rounded-lg"></div>
                                )}
                                <div className="mr-4 text-xl">{item.icon}</div>
                                <span className="text-sm">{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
