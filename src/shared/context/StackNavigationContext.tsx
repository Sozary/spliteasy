import { createContext, useContext, ReactNode, useReducer, useCallback, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type StackView = {
    id: string;
    path: string;
    component: ReactNode;
};

interface StackState {
    views: StackView[];
}

type StackAction =
    | { type: 'PUSH_VIEW'; payload: StackView }
    | { type: 'POP_VIEW' }
    | { type: 'RESET' };

const stackReducer = (state: StackState, action: StackAction): StackState => {
    switch (action.type) {
        case 'PUSH_VIEW':
            return {
                ...state,
                views: [...state.views, action.payload]
            };
        case 'POP_VIEW':
            return {
                ...state,
                views: state.views.slice(0, -1)
            };
        case 'RESET':
            return { views: [] };
        default:
            return state;
    }
};

const StackNavigationContext = createContext<{
    views: StackView[];
    pushView: (view: Omit<StackView, 'id'>) => void;
    popView: () => void;
    reset: () => void;
    handleClose: (path: string) => void;
    handleExitComplete: (viewId: string) => void;
    removingViewId: string | null;
} | null>(null);

export const StackNavigationProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(stackReducer, { views: [] });
    const [removingViewId, setRemovingViewId] = useState<string | null>(null);
    const navigate = useNavigate();

    const viewsRef = useRef(state.views);


    const pushView = useCallback((view: Omit<StackView, 'id'>) => {
        console.log(view.path);

        if (state.views.some((v) => v.path === view.path)) {
            return;
        }
        const id = Math.random().toString(36).substr(2, 9);
        dispatch({ type: 'PUSH_VIEW', payload: { ...view, id } });
        navigate(view.path, { replace: true });
    }, [navigate, state.views]);




    const handleExitComplete = (viewId: string) => {
        if (removingViewId === viewId) {
            popView();
            setRemovingViewId(null);
        }
    };


    const popView = useCallback(() => {
        setTimeout(() => {
            dispatch({ type: "POP_VIEW" });
            const previousView = state.views[state.views.length - 2];

            if (previousView) {
                navigate(previousView.path, { replace: true });
            }
        }, 300);

    }, [navigate, state.views]);

    const reset = useCallback(() => {
        dispatch({ type: 'RESET' });
    }, []);

    useEffect(() => {
        console.log(state.views);
    }, [state.views]);

    const handleClose = useCallback((path: string) => {
        const viewToRemove = viewsRef.current.find((v) => v.path === path);
        popView();
        if (viewToRemove) {
            setRemovingViewId(viewToRemove.id);
        }
    }, [popView]);

    useEffect(() => {
        viewsRef.current = state.views;
    }, [state.views]);

    return (
        <StackNavigationContext.Provider value={{
            views: state.views,
            pushView,
            popView,
            reset,
            handleClose, removingViewId,
            handleExitComplete
        }}>
            {children}
        </StackNavigationContext.Provider>
    );
};

export const useStackNavigation = () => {
    const context = useContext(StackNavigationContext);
    if (!context) {
        throw new Error('useStackNavigation must be used within StackNavigationProvider');
    }
    return context;
};