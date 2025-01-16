import React from 'react';
import {
    FaChartBar,
    FaCog,
    FaDatabase,
    FaFileAlt,
    FaMapMarkerAlt,
    FaShoppingCart,
    FaSignOutAlt,
    FaTachometerAlt,
    FaTools,
    FaTruck,
} from 'react-icons/fa';

const Sidebar: React.FC = () => {
    const menuItems = [
        {
            heading: "Menu",
            items: [
                { label: "Dashboard", icon: <FaTachometerAlt />, href: "/dashboard" },
                { label: "Live Data", icon: <FaDatabase />, href: "/live-data" },
                { label: "Orders", icon: <FaShoppingCart />, href: "/orders" },
                { label: "Stocks", icon: <FaChartBar />, href: "/stocks" },
                { label: "Sales Insights", icon: <FaChartBar />, href: "/sales-insights" },
                { label: "Location", icon: <FaMapMarkerAlt />, href: "/location" },
                { label: "Maintenance", icon: <FaTools />, href: "/maintenance" },
                { label: "Logistics", icon: <FaTruck />, href: "/logistics" },
            ],
        },
        {
            heading: "Other Menu",
            items: [
                { label: "Reports", icon: <FaFileAlt />, href: "/reports" },
                { label: "Settings", icon: <FaCog />, href: "/settings" },
                { label: "Logout", icon: <FaSignOutAlt />, href: "/logout" },
            ],
        },
    ];

    return (
        <div className="w-64 h-screen bg-gradient-to-b from-[#0c3e48] to-[#165b62] text-white fixed rounded-tr-3xl rounded-br-3xl flex flex-col p-5">
            <a href="/">
            <div className="text-center font-bold text-2xl mb-8">
                <span className="text-[#4fe37b]">G</span>ASONX
            </div>
            </a>

            {menuItems.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                    <div className="uppercase text-xs text-gray-400 pl-4 mb-3">{section.heading}</div>
                    <ul>
                        {section.items.map((item, itemIndex) => (
                            <a
                                key={itemIndex}
                                href={item.href}
                                className={`
                                    flex items-center px-4 py-2 mb-2 rounded-lg cursor-pointer transition duration-300 
                                    hover:bg-white/10
                                `}
                            >
                                <div className="mr-4 text-xl">{item.icon}</div>
                                <span className="text-sm">{item.label}</span>
                            </a>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
