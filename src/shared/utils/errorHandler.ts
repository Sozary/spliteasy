import toast from "react-hot-toast";
import { AxiosError } from "axios";

interface ApiError {
	Message: string;
	code: string;
	details?: Record<string, unknown>;
}

export class ErrorHandler {
	static handle(error: unknown) {
		if (error instanceof AxiosError) {
			if (!error.response) {
				if (
					error.code === "ERR_NETWORK" ||
					error.code === "ERR_CONNECTION_REFUSED"
				) {
					toast.error(
						"Unable to connect to server. Please check your connection."
					);
					return;
				}
				toast.error(error.message || "An unexpected error occurred");
				return;
			}

			const data = error.response?.data as ApiError;

			switch (error.response?.status) {
				case 401:
					this.handleAuthError(data);
					break;
				case 403:
					this.handleForbiddenError(data);
					break;
				case 422:
					this.handleValidationError(data);
					break;
				case 404:
					this.handleNotFoundError(data);
					break;
				default:
					this.handleGenericError(data);
			}
		} else if (error instanceof Error) {
			toast.error(error.message);
		} else {
			toast.error("An unexpected error occurred");
		}
	}

	private static handleAuthError(error: ApiError) {
		toast.error(error.Message || "Authentication failed");
	}

	private static handleForbiddenError(error: ApiError) {
		toast.error(error.Message || "Access denied");
	}
	private static handleNotFoundError(error: ApiError) {
		toast.error(error.Message || "Not found");
	}

	private static handleValidationError(error: ApiError) {
		if (error.details) {
			Object.values(error.details).forEach((message) => {
				toast.error(message as string);
			});
		} else {
			toast.error(error.Message || "Validation failed");
		}
	}

	private static handleGenericError(error: ApiError) {
		toast.error(error.Message || "An unexpected error occurred");
	}
}
