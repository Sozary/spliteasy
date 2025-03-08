import { ReactNode, useState, useEffect, useCallback } from "react";
import { useApi } from "../../../hooks/useApi";
import { ErrorHandler } from "../../../shared/utils/errorHandler";
import { User, AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { auth } = useApi();

    const checkAuth = useCallback(async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            setIsAuthenticated(false);
            setUser(null);
            setIsLoading(false);
            return;
        }

        try {
            const response = await auth.authMeGet();
            setUser({
                username: response.data.username!,
                id: response.data.userId!
            });
            setIsAuthenticated(true);
        } catch (error) {
            ErrorHandler.handle(error);
            localStorage.removeItem("token");
            setIsAuthenticated(false);
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    }, [auth]);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);


    const login = async (username: string, password: string) => {
        const response = await auth.authSignInPost({ username, password });
        const { token, userId } = response.data;

        if (token) {
            localStorage.setItem("token", token);
            setIsAuthenticated(true);
            setUser({ username, id: userId || "" });
            ErrorHandler.handle("Successfully logged in!");
        }
    };

    const signup = async (username: string, password: string) => {
        const response = await auth.authSignUpPost({ username, password });
        const { token } = response.data;

        if (token) {
            localStorage.setItem("token", token);
            setIsAuthenticated(true);
            setUser({ username, id: '' });
            ErrorHandler.handle("Account created successfully!");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setUser(null);
    };

    const refreshAuth = useCallback(async () => {
        try {
            await checkAuth();
        } catch (error) {
            ErrorHandler.handle(error);
        }
    }, [checkAuth]);

    useEffect(() => {
        if (isAuthenticated) {
            const interval = setInterval(refreshAuth, 5 * 60 * 1000);
            return () => clearInterval(interval);
        }
    }, [isAuthenticated, refreshAuth]);

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }
    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};