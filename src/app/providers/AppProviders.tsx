import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../../features/auth/context/AuthProvider';

interface AppProvidersProps {
    children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
    return (
        <BrowserRouter>
            <AuthProvider>
                {children}
                <Toaster position="top-center" />
            </AuthProvider>
        </BrowserRouter>
    );
};
