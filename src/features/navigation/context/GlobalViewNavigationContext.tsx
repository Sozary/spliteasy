import { createContext } from 'react';

export type GlobalViewNavigationRoute = 'dashboard' | 'groups' | 'profile';

export interface GlobalViewNavigationContextType {
    currentRoute: GlobalViewNavigationRoute;
    navigate: (route: GlobalViewNavigationRoute) => void;
}

export const GlobalViewNavigationContext = createContext<GlobalViewNavigationContextType | null>(null);