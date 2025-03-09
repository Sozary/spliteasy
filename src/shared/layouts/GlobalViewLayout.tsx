// GlobalViewLayout is a layout that is used to display the on the dashboard / group list page / user page
import { ReactNode, useState } from "react";
import User from "../assets/User";
import Home from "../assets/Home";
import Group from "../assets/Group";
import Profile from "../assets/Profile";
import { useGlobalViewNavigation } from "@/features/navigation/hooks/useGlobalViewNavigation";
import { GlobalViewNavigationProvider } from "@/features/navigation/context/GlobalViewNavigationProvider";
import { useLocation } from "react-router-dom";

interface GlobalViewLayoutProps {
    children: ReactNode;
}

const TopBar = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
            <span className="text-xl">SplitEasy</span>
            <div className="flex items-center gap-2">
                <span>John Doe</span>
                <User />
            </div>
        </div>
    )
}

const BottomBar = () => {
    const location = useLocation();
    const pathname = location.pathname.split('/')[1].charAt(0).toUpperCase() + location.pathname.split('/')[1].slice(1);

    const [activeItem, setActiveItem] = useState<string>(pathname);
    const { navigate } = useGlobalViewNavigation();

    const bottomBarItems = [
        {
            icon: <Home color={activeItem === 'Dashboard' ? '#111827' : '#4B5563'} />,
            label: "Dashboard",
            href: "/",
            onClick: () => navigate('dashboard')
        },
        {
            icon: <Group color={activeItem === 'Groups' ? '#111827' : '#4B5563'} />,
            label: 'Groups',
            href: '/groups',
            onClick: () => navigate('groups')
        },
        {
            label: "Profile",
            href: "/profile",
            disabled: true,
            onClick: () => { },
            icon: (
                <Profile
                    color={activeItem === "Profile" ? "#111827" : "#4B5563"}
                />
            ),

        },
    ];
    return (
        <div className="flex items-center justify-between py-3 px-10 text-[#4B5563] bg-white border-t border-gray-200">
            {bottomBarItems.map((item) => (
                <div
                    key={item.label}
                    className={`flex flex-col items-center gap-2 hover:scale-105 transition-all duration-300 ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    onClick={() => {
                        if (!item.disabled) {
                            item.onClick();
                            setActiveItem(item.label);
                        }
                    }}
                >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                </div>
            ))}
        </div>
    )
}
export const GlobalViewLayout = ({ children }: GlobalViewLayoutProps) => {
    return (
        <div className="flex flex-col h-screen">
            <TopBar />
            <div className="flex-grow max-h-[calc(100vh-142px)] overflow-y-auto p-5 gap-5 flex flex-col">
                {children}
            </div>
            <GlobalViewNavigationProvider>
                <BottomBar />
            </GlobalViewNavigationProvider>
        </div>
    );
}; 