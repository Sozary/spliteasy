import { BottomBar } from "./components/BottomBar";
import { TopBar } from "./components/TopBar";
import { GlobalViewNavigationProvider } from "./context/GlobalViewNavigationProvider";
import { Outlet } from "react-router-dom";

export const GlobalViewLayout = () => {
    return (
        <GlobalViewNavigationProvider>
            <div className="flex flex-col h-screen">
                <TopBar />
                <div className="flex-grow max-h-[calc(100vh-142px)] overflow-y-auto p-5 gap-5 flex flex-col">
                    <Outlet />
                </div>
                <BottomBar />
            </div>
        </GlobalViewNavigationProvider>
    );
}; 