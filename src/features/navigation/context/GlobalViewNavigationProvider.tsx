import { ReactNode, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalViewNavigationContext, GlobalViewNavigationRoute } from './GlobalViewNavigationContext';


interface GlobalViewNavigationProviderProps {
    children: ReactNode;
}

export const GlobalViewNavigationProvider = ({ children }: GlobalViewNavigationProviderProps) => {
    const location = useLocation();
    const pathname = location.pathname.split('/')[1].charAt(0).toUpperCase() + location.pathname.split('/')[1].slice(1);

    const [currentRoute, setCurrentRoute] = useState<GlobalViewNavigationRoute>(pathname as GlobalViewNavigationRoute);
    const navigate = useNavigate();

    const handleGlobalViewNavigation = (route: GlobalViewNavigationRoute) => {
        setCurrentRoute(route);
        switch (route) {
            case 'dashboard':
                navigate('/dashboard');
                break;
            case 'groups':
                navigate('/groups');
                break;
            case 'profile':
                navigate('/profile');
                break;
        }
    };

    return (
        <GlobalViewNavigationContext.Provider
            value={{
                currentRoute,
                navigate: handleGlobalViewNavigation,
            }}
        >
            {children}
        </GlobalViewNavigationContext.Provider>
    );
};