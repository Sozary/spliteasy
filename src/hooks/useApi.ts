// src/hooks/useApi.ts
import { useMemo } from "react";
import { AuthApi, Configuration } from "../api";

export const useApi = () => {
	return useMemo(() => {
		const token = localStorage.getItem("token");
		const config = new Configuration({
			basePath: import.meta.env.VITE_API_URL,
			baseOptions: {
				headers: {
					...(token && { Authorization: `Bearer ${token}` }),
				},
			},
		});

		return {
			auth: new AuthApi(config),
		};
	}, []);
};
