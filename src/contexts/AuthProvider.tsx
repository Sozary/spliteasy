import { ReactNode, useState, useMemo, useEffect } from "react";
import { AuthApi, Configuration } from "../api";
import { API_URL } from "../utils/config";
import { ErrorHandler } from "../utils/errorHandler";
import { AuthContext, User } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const authApi = useMemo(() => new AuthApi(new Configuration({ basePath: API_URL })), []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            authApi.authMeGet()
                .then((response) => {
                    setUser({ username: response.data.username!, id: response.data.userId! });
                    setIsAuthenticated(true);
                })
                .catch(() => {
                    localStorage.removeItem("token");
                    setIsAuthenticated(false);
                    setUser(null);
                });
        }
    }, [authApi]);

    const login = async (username: string, password: string) => {
        const response = await authApi.authSignInPost({ username, password });
        const { token, userId } = response.data;

        if (token) {
            localStorage.setItem("token", token);
            setIsAuthenticated(true);
            setUser({ username, id: userId || "" });
            ErrorHandler.success("Successfully logged in!");
        }
    };

    const signup = async (username: string, password: string) => {
        const response = await authApi.authSignUpPost({ username, password });
        const { token } = response.data;

        if (token) {
            localStorage.setItem("token", token);
            setIsAuthenticated(true);
            setUser({ username, id: '' });
            ErrorHandler.success("Account created successfully!");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};