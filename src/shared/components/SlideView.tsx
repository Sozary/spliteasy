// src/shared/components/SlideView/SlideView.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideViewProps {
    children: ReactNode;
    isVisible: boolean;
    onClose?: () => void;
    onExitComplete?: () => void;
}

export const SlideView = ({ children, isVisible, onClose, onExitComplete }: SlideViewProps) => {
    return (
        <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
            {isVisible && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={onClose}
                    />
                    xx
                    <motion.div
                        initial={{ transform: 'translateX(100%)' }}
                        animate={{ transform: 'translateX(0%)' }}
                        exit={{ transform: 'translateX(100%)' }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut'
                        }}
                        className="fixed right-0 top-0 bottom-0 w-full bg-white z-50 overflow-hidden"
                    >
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};