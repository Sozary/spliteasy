import React, { createContext, useContext, useReducer, ReactNode, useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Types of slide animations
export type AnimationType = 'slide' | 'scale' | 'fade';

// Slide item interface
export interface SlideItem {
    id: string;
    component: ReactNode;
    path: string;
    animationType: AnimationType;
    props?: Record<string, unknown>;
    returnTo?: string; // For specifying where to return when closed
}

// State interface
interface SlideState {
    slides: SlideItem[];
    exiting: Record<string, boolean>;
}

// Action types
type SlideAction =
    | { type: 'PUSH_SLIDE'; payload: SlideItem }
    | { type: 'POP_SLIDE'; payload: string }
    | { type: 'SET_EXITING'; payload: string }
    | { type: 'REMOVE_SLIDE'; payload: string }
    | { type: 'CLEAR_SLIDES' };

// Initial state
const initialState: SlideState = {
    slides: [],
    exiting: {}
};

// Reducer
const slideReducer = (state: SlideState, action: SlideAction): SlideState => {
    switch (action.type) {
        case 'PUSH_SLIDE':
            return {
                ...state,
                slides: [...state.slides, action.payload]
            };
        case 'SET_EXITING':
            return {
                ...state,
                exiting: { ...state.exiting, [action.payload]: true }
            };
        case 'REMOVE_SLIDE':
            return {
                ...state,
                slides: state.slides.filter(slide => slide.id !== action.payload),
                exiting: { ...state.exiting, [action.payload]: false }
            };
        case 'POP_SLIDE':
            if (state.slides.length === 0) return state;
            return {
                ...state,
                exiting: { ...state.exiting, [action.payload]: true }
            };
        case 'CLEAR_SLIDES':
            return initialState;
        default:
            return state;
    }
};

// Context
interface SlideContextType {
    slides: SlideItem[];
    exiting: Record<string, boolean>;
    pushSlide: (slide: Omit<SlideItem, 'id'>) => string;
    popSlide: (id: string) => void;
    closeSlide: (id: string) => void;
    clearSlides: () => void;
}

const SlideContext = createContext<SlideContextType | undefined>(undefined);

// Provider
export const SlideProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(slideReducer, initialState);
    const navigate = useNavigate();
    const location = useLocation();

    // Generate a unique ID
    const generateId = () => Math.random().toString(36).substring(2, 9);

    // Push a new slide
    const pushSlide = useCallback((slide: Omit<SlideItem, 'id'>) => {
        const id = generateId();

        // Check if a slide with this path already exists
        const existingSlide = state.slides.find(s => s.path === slide.path);
        if (existingSlide) {
            // Don't create a duplicate slide, just return the existing ID
            return existingSlide.id;
        }

        const newSlide = { ...slide, id };
        dispatch({ type: 'PUSH_SLIDE', payload: newSlide });

        // Update URL if needed
        if (slide.path && slide.path !== location.pathname) {
            navigate(slide.path, { replace: false });
        }

        return id;
    }, [navigate, location.pathname, state.slides]);

    // Pop a slide with proper exit animation
    const popSlide = useCallback((id: string) => {
        const slide = state.slides.find(s => s.id === id);
        if (!slide) return;

        // First set the exiting state to trigger animation
        dispatch({ type: 'SET_EXITING', payload: id });

        // Get animation duration based on type
        const getDuration = (type: AnimationType) => {
            switch (type) {
                case 'slide': return 300;
                case 'scale': return 200;
                case 'fade': return 200;
                default: return 200;
            }
        };

        const duration = getDuration(slide.animationType);

        // Remove after animation completes
        setTimeout(() => {
            // Check if this is still the active slide (in case other actions happened)
            const isStillInState = state.slides.some(s => s.id === id);
            if (!isStillInState) return;

            dispatch({ type: 'REMOVE_SLIDE', payload: id });

            // Find the next slide to show, if any
            const remainingSlides = state.slides.filter(s => s.id !== id);
            const nextSlide = remainingSlides.length > 0
                ? remainingSlides[remainingSlides.length - 1]
                : null;

            // Navigate back or to returnTo, but only if we're still on the slide's path
            if (location.pathname === slide.path) {
                if (slide.returnTo) {
                    navigate(slide.returnTo);
                } else if (nextSlide) {
                    navigate(nextSlide.path);
                } else {
                    navigate(-1);
                }
            }
        }, duration);
    }, [state.slides, navigate, location.pathname]);

    // Close a slide immediately (no animation)
    const closeSlide = useCallback((id: string) => {
        const slide = state.slides.find(s => s.id === id);
        if (!slide) return;

        dispatch({ type: 'REMOVE_SLIDE', payload: id });

        // Navigate back or to returnTo
        if (slide.returnTo) {
            navigate(slide.returnTo);
        } else {
            navigate(-1);
        }
    }, [state.slides, navigate]);

    // Clear all slides
    const clearSlides = useCallback(() => {
        dispatch({ type: 'CLEAR_SLIDES' });
    }, []);

    // Handle browser back button
    useEffect(() => {
        const handlePopState = () => {
            if (state.slides.length > 0) {
                const lastSlide = state.slides[state.slides.length - 1];
                popSlide(lastSlide.id);
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [state.slides, popSlide]);

    return (
        <SlideContext.Provider value={{
            slides: state.slides,
            exiting: state.exiting,
            pushSlide,
            popSlide,
            closeSlide,
            clearSlides
        }}>
            {children}
        </SlideContext.Provider>
    );
};

// Hook
export const useSlide = () => {
    const context = useContext(SlideContext);
    if (context === undefined) {
        throw new Error('useSlide must be used within a SlideProvider');
    }
    return context;
}; 