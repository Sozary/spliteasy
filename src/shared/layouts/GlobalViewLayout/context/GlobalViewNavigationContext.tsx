import { createContext } from 'react';

export type GlobalViewNavigationRoute = 'dashboard' | 'groups' | 'profile';

export interface GlobalViewNavigationContextType {
    currentRoute: GlobalViewNavigationRoute;
    navigate: (route: GlobalViewNavigationRoute) => void;
    isLoading: boolean;
}

export const GlobalViewNavigationContext = createContext<GlobalViewNavigationContextType | null>(null);