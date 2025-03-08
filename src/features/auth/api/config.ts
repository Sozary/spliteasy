import { Configuration } from '../../../api';

export const createApiConfig = (token?: string) => {
    return new Configuration({
        basePath: import.meta.env.VITE_API_URL || 'http://localhost:3000',
        baseOptions: {
            headers: {
                ...(token && { Authorization: `Bearer ${token}` })
            }
        }
    });
};