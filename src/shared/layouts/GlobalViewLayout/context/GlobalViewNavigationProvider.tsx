import { ReactNode, useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalViewNavigationContext, GlobalViewNavigationRoute } from './GlobalViewNavigationContext';

interface GlobalViewNavigationProviderProps {
    children: ReactNode;
}

export const GlobalViewNavigationProvider = ({ children }: GlobalViewNavigationProviderProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    const getCurrentRoute = useCallback((path: string): GlobalViewNavigationRoute => {
        if (path.startsWith('/groups/')) {
            return 'groups';
        }
        const pathToRoute: Record<string, GlobalViewNavigationRoute> = {
            '/dashboard': 'dashboard',
            '/groups': 'groups',
            '/profile': 'profile',
        };
        const route = pathToRoute[path] || 'dashboard';
        return route;
    }, []);

    const [currentRoute, setCurrentRoute] = useState<GlobalViewNavigationRoute>(
        getCurrentRoute(location.pathname)
    );

    useEffect(() => {
        setCurrentRoute(getCurrentRoute(location.pathname));
    }, [getCurrentRoute, location.pathname]);

    const handleGlobalViewNavigation = (route: GlobalViewNavigationRoute) => {
        setIsLoading(true);
        try {
            setCurrentRoute(route);
            navigate(`/${route}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <GlobalViewNavigationContext.Provider
            value={{
                currentRoute,
                navigate: handleGlobalViewNavigation,
                isLoading,
            }}
        >
            {children}
        </GlobalViewNavigationContext.Provider>
    );
};