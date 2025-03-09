import { useContext } from "react";
import {
	GlobalViewNavigationContext,
	GlobalViewNavigationContextType,
} from "../context/GlobalViewNavigationContext";

export const useGlobalViewNavigation = (): GlobalViewNavigationContextType => {
	const context = useContext(GlobalViewNavigationContext);
	if (!context) {
		throw new Error(
			"useGlobalViewNavigation must be used within GlobalViewNavigationProvider"
		);
	}
	return context;
};
