
import { ReactNode } from "react";
import { BottomBar } from "./components/BottomBar";
import { TopBar } from "./components/TopBar";
import { GlobalViewNavigationProvider } from "./context/GlobalViewNavigationProvider";

interface GlobalViewLayoutProps {
    children: ReactNode;
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