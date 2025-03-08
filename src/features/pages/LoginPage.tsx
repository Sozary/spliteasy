import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import User from "../../shared/assets/User";
import Input from "../../shared/components/Input";
import Password from "../auth/assets/Password";
import LoginMessage from "../auth/components/LoginMessage";
import LoginSignUpMessage from "../auth/components/LoginSignUpMessage";
import { ErrorHandler } from '../../shared/utils/errorHandler';
import { useAuth } from '../auth/hooks/useAuth';
import { Button } from '../../shared/components/Button';
import { AuthenticationLayout } from '../../shared/layouts/AuthenticationLayout';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        try {
            e.preventDefault();
            await login(username, password);
            const from = location.state?.from?.pathname || '/dashboard';
            navigate(from);
        } catch (error) {
            ErrorHandler.handle(error);
        }
    };

    return (
        <AuthenticationLayout>
            <LoginMessage />
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <Input
                    logo={<User />}
                    required
                    name="username"
                    label="Username"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    required
                    logo={<Password />}
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">Sign In</Button>
            </form>
            <LoginSignUpMessage />
        </AuthenticationLayout>
    );
}