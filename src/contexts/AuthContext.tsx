import { createContext } from 'react';

export interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    login: (username: string, password: string) => Promise<void>;
    signup: (username: string, password: string) => Promise<void>;
    logout: () => void;
}
export interface User {
    id: string;
    username: string;
}

export const AuthContext = createContext<AuthContextType | null>(null);
