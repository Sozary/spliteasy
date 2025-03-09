import Group from "@/shared/assets/Group";
import Home from "@/shared/assets/Home";
import Profile from "@/shared/assets/Profile";
import { useGlobalViewNavigation } from "../hooks/useGlobalViewNavigation";

export const BottomBar = () => {
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