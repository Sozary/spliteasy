import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const RedirectToDashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/dashboard', { replace: true });
    }, [navigate]);

    return null;
};