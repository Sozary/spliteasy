import toast from "react-hot-toast";
import { AxiosError } from "axios";

export class ErrorHandler {
	static handle(error: unknown) {
		if (error instanceof AxiosError) {
			const errorMessage =
				(error.response?.data as string | undefined) ||
				"An unexpected error occurred";

			toast.error(errorMessage);
		} else if (error instanceof Error) {
			toast.error(error.message);
		} else {
			toast.error("An unexpected error occurred");
		}
	}

	static success(message: string) {
		toast.success(message);
	}

	static customError(message: string) {
		toast.error(message);
	}
}
