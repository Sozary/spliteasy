import { ReactNode } from 'react';

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div>
            {children}
        </div>
    );
}; 