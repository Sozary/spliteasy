import { ReactNode } from 'react';
import Navbar from '../../features/auth/components/Navbar';

interface AuthenticationLayoutProps {
    children: ReactNode;
}

export const AuthenticationLayout = ({ children }: AuthenticationLayoutProps) => {
    return (
        <div className="flex flex-col gap-5">
            <Navbar />
            <div className="px-10 flex flex-col gap-5">
                {children}
            </div>
        </div>
    );
}; 