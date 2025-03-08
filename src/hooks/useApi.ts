// src/hooks/useApi.ts
import { useMemo } from "react";
import { AuthApi, Configuration } from "../api";

export const useApi = () => {
	const config = useMemo(() => {
		const token = localStorage.getItem("token");
		return new Configuration({
			basePath: import.meta.env.VITE_API_URL,
			baseOptions: {
				headers: {
					...(token && { Authorization: `Bearer ${token}` }),
				},
			},
		});
	}, []);

	return useMemo(
		() => ({
			auth: new AuthApi(config),
		}),
		[config]
	);
};
