import { ReactNode } from "react";
import User from "../assets/User";
import Home from "../assets/Home";
import Group from "../assets/Group";
import Profile from "../assets/Profile";
import { useGlobalViewNavigation } from "@/features/navigation/hooks/useGlobalViewNavigation";
import { GlobalViewNavigationProvider } from "@/features/navigation/context/GlobalViewNavigationProvider";

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
    const { currentRoute, navigate } = useGlobalViewNavigation();

    const bottomBarItems = [
        {
            icon: <Home color={currentRoute === 'dashboard' ? '#111827' : '#4B5563'} />,
            disabled: false,
            route: 'dashboard' as const,
            label: "Dashboard",
        },
        {
            icon: <Group color={currentRoute === 'groups' ? '#111827' : '#4B5563'} />,
            disabled: false,
            label: 'Groups',
            route: 'groups' as const,
        },
        {
            label: "Profile",
            route: 'profile' as const,
            disabled: true,
            icon: (
                <Profile
                    color={currentRoute === "profile" ? "#111827" : "#4B5563"}
                />
            ),

        },
    ] as const;

    return (
        <div className="flex items-center justify-between py-3 px-10 text-[#4B5563] bg-white border-t border-gray-200">
            {bottomBarItems.map((item) => (
                <div
                    key={item.label}
                    className={`flex flex-col items-center gap-2 hover:scale-105 transition-all duration-300 ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    onClick={() => {
                        if (!item.disabled) {
                            navigate(item.route);
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
        <GlobalViewNavigationProvider>
            <div className="flex flex-col h-screen">
                <TopBar />
                <div className="flex-grow max-h-[calc(100vh-142px)] overflow-y-auto p-5 gap-5 flex flex-col">
                    {children}
                </div>
                <BottomBar />
            </div>
        </GlobalViewNavigationProvider>
    );
}; 