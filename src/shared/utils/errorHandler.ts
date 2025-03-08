import toast from "react-hot-toast";
import { AxiosError } from "axios";

interface ApiError {
	message: string;
	code: string;
	details?: Record<string, unknown>;
}

export class ErrorHandler {
	static handle(error: unknown) {
		if (error instanceof AxiosError) {
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
		toast.error(error.message || "Authentication failed");
	}

	private static handleForbiddenError(error: ApiError) {
		toast.error(error.message || "Access denied");
	}

	private static handleValidationError(error: ApiError) {
		if (error.details) {
			Object.values(error.details).forEach((message) => {
				toast.error(message as string);
			});
		} else {
			toast.error(error.message || "Validation failed");
		}
	}

	private static handleGenericError(error: ApiError) {
		toast.error(error.message || "An unexpected error occurred");
	}
}
