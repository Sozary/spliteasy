// GlobalViewLayout is a layout that is used to display the on the dashboard / group list page / user page
import { ReactNode, useState } from "react";
import User from "../../shared/assets/User";
import Home from "./assets/Home";
import Group from "./assets/Group";
import Profile from "./assets/Profile";

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
    const [activeItem, setActiveItem] = useState<string>('Home');

    const bottomBarItems = [
        {
            icon: <Home color={activeItem === 'Home' ? '#111827' : '#4B5563'} />,
            label: "Home",
            href: "/"
        },
        {
            icon: <Group color={activeItem === 'Groups' ? '#111827' : '#4B5563'} />,
            label: 'Groups',
            href: '/groups'
        },
        {
            label: 'Profile',
            href: '/profile',
            icon: <Profile color={activeItem === 'Profile' ? '#111827' : '#4B5563'} />
        }
    ]
    return (
        <div className="flex items-center justify-between py-3 px-10 text-[#4B5563] bg-white border-t border-gray-200">
            {bottomBarItems.map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2">
                    <a href={item.href} onClick={() => setActiveItem(item.label)}>
                        {item.icon}
                    </a>
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
            <BottomBar />
        </div>
    );
}; 