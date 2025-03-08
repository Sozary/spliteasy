import { ReactNode, useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { ErrorHandler } from "../../../shared/utils/errorHandler";
import { User, AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const { auth } = useApi();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            auth.authMeGet()
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
    }, [auth]);

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

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};