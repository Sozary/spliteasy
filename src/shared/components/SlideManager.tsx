import { useStackNavigation } from "@/shared/context/StackNavigationContext";
import { SlideView } from "./SlideView";

export const SlideManager = () => {
    const { views, handleExitComplete, handleClose, removingViewId } = useStackNavigation();


    return (
        <>
            {views.map((view) => (
                <SlideView
                    key={view.id}
                    isVisible={view.id !== removingViewId}
                    onClose={() => handleClose(view.path)}
                    onExitComplete={() => handleExitComplete(view.id)}
                >
                    {view.component}
                </SlideView>
            ))}
        </>
    );
};
