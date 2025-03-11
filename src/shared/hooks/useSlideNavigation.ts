import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSlide, AnimationType } from "../context/SlideContext";

export const useSlideNavigation = () => {
	const { pushSlide, popSlide, closeSlide, slides } = useSlide();
	const navigate = useNavigate();

	const openSlide = useCallback(
		(
			component: React.ReactNode,
			path: string,
			animationType: AnimationType = "slide",
			props = {},
			returnTo?: string
		) => {
			const id = pushSlide({
				component,
				path,
				animationType,
				props,
				returnTo,
			});

			return id;
		},
		[pushSlide]
	);

	// Find and close the current slide by path
	const closeSlideByPath = useCallback(
		(path: string) => {
			const slideToClose = slides.find((slide) => slide.path === path);
			if (slideToClose) {
				popSlide(slideToClose.id);
			}
		},
		[slides, popSlide]
	);

	// Close the topmost slide
	const closeCurrentSlide = useCallback(() => {
		if (slides.length > 0) {
			const topSlide = slides[slides.length - 1];
			popSlide(topSlide.id);
		}
	}, [slides, popSlide]);

	return {
		openSlide,
		closeSlide: closeCurrentSlide,
		closeSlideByPath,
		immediateClose: closeSlide,
		navigate,
		currentSlides: slides,
	};
};
