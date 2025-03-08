import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import User from "../../shared/assets/User";
import { Button } from "../../shared/components/Button";
import Input from "../../shared/components/Input";
import { AuthenticationLayout } from "../../shared/layouts/AuthenticationLayout";
import { ErrorHandler } from "../../shared/utils/errorHandler";
import Password from "../auth/assets/Password";
import SignUpSignUpMessage from "../auth/components/SignUpSignUpMessage";
import { useAuth } from "../auth/hooks/useAuth";

export default function SignUpPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { signup } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        try {
            e.preventDefault();
            await signup(username, password);
            const from = location.state?.from?.pathname || '/dashboard';
            navigate(from);
        } catch (error) {
            ErrorHandler.handle(error);
        }
    };
    return (
        <AuthenticationLayout>
            <div className="flex flex-col gap-5 bg-white p-5 rounded-md border border-gray-200">
                <h1 className="text-2xl text-[#111827] font-medium">Create an account</h1>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <Input logo={<User />} name="username" label="Username" type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <Input logo={<Password />} name="password" label="Password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button type="submit">Sign Up</Button>
                </form>
            </div>
            <SignUpSignUpMessage />
        </AuthenticationLayout>
    )
}
