import React from 'react';
import { motion } from 'framer-motion';
import { useSlide, AnimationType } from '../context/SlideContext';

// Animation variants based on type
const getAnimationProps = (type: AnimationType, isExiting: boolean) => {
    switch (type) {
        case 'slide':
            return {
                initial: { transform: 'translateX(100%)' },
                animate: { transform: isExiting ? 'translateX(100%)' : 'translateX(0%)' },
                transition: { duration: 0.3, ease: 'easeInOut' },
                className: "fixed inset-0 w-full h-full bg-white overflow-auto z-50"
            };
        case 'scale':
            return {
                initial: { scale: 0, opacity: 0 },
                animate: { scale: isExiting ? 0 : 1, opacity: isExiting ? 0 : 1 },
                transition: {
                    duration: 0.2,
                    ease: isExiting ? 'easeIn' : 'easeOut',
                    exit: { duration: 0.2 }
                },
                className: "fixed inset-0 w-full h-full bg-white overflow-auto z-50",
                style: { transformOrigin: 'center center' }
            };
        case 'fade':
            return {
                initial: { opacity: 0 },
                animate: { opacity: isExiting ? 0 : 1 },
                transition: { duration: 0.2 },
                className: "fixed inset-0 w-full h-full bg-white overflow-auto z-50"
            };
        default:
            return {
                initial: { opacity: 0 },
                animate: { opacity: isExiting ? 0 : 1 },
                transition: { duration: 0.2 },
                className: "fixed inset-0 w-full h-full bg-white overflow-auto z-50"
            };
    }
};

// Create a type for the component props that includes onClose
interface SlideComponentProps {
    onClose?: () => void;
    [key: string]: unknown;
}

export const SlideRenderer: React.FC = () => {
    const { slides, exiting, popSlide } = useSlide();

    if (slides.length === 0) return null;

    return (
        <>
            {slides.map((slide, index) => {
                const isExiting = !!exiting[slide.id];
                const zIndex = 1000 + index;
                const animProps = getAnimationProps(slide.animationType, isExiting);

                return (
                    <React.Fragment key={slide.id}>
                        {/* Backdrop for all animations */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isExiting ? 0 : 0.5 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black bg-opacity-50"
                            style={{ zIndex: zIndex - 1 }}
                            onClick={() => popSlide(slide.id)}
                        />

                        {/* Slide container */}
                        <motion.div
                            {...animProps}
                            style={{ ...animProps.style, zIndex }}
                        >
                            {React.isValidElement(slide.component)
                                ? React.cloneElement(slide.component as React.ReactElement<SlideComponentProps>, {
                                    onClose: () => popSlide(slide.id),
                                    ...slide.props
                                })
                                : slide.component}
                        </motion.div>
                    </React.Fragment>
                );
            })}
        </>
    );
}; 