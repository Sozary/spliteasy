// GroupViewLayout is a layout that is used to display a group or add a new group/expense, with a button at the bottom
import { ReactNode } from "react";
import Button from "../../shared/components/Button";
import Arrow from "./assets/Arrow";
import Times from "./assets/Times";

interface ButtonViewLayoutProps {
    children: ReactNode;
    title: string;
    discardable?: boolean;
    onDiscard?: () => void;
    actionButtonLabel: string;
    onActionButtonClick?: () => void;
}

interface TopBarProps {
    title: string;
    discardable?: boolean;
    onDiscard?: () => void;
}

interface BottomBarProps {
    actionButtonLabel: string;
    onActionButtonClick?: () => void;
}

const TopBar = ({ title, discardable, onDiscard }: TopBarProps) => {
    return (
        <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
            <Arrow size={20} />
            <span className="text-xl font-medium text-[#111827]">{title}</span>
            {discardable && <Times size={24} onClick={onDiscard} />}
        </div>
    )
}

const BottomBar = ({ actionButtonLabel, onActionButtonClick }: BottomBarProps) => {
    return <div className="flex justify-between items-center p-4 bg-white border-t border-gray-200">
        <Button className="w-full" onClick={onActionButtonClick}>{actionButtonLabel}</Button>
    </div>
}
export const ButtonViewLayout = ({ children, title, discardable, onDiscard, actionButtonLabel, onActionButtonClick }: ButtonViewLayoutProps) => {
    return (
        <div className="flex flex-col h-screen">
            <TopBar title={title} discardable={discardable} onDiscard={onDiscard} />
            <div className="flex-grow max-h-[calc(100vh-142px)] overflow-y-auto p-5 gap-5 flex flex-col">
                {children}
            </div>
            <BottomBar actionButtonLabel={actionButtonLabel} onActionButtonClick={onActionButtonClick} />
        </div>
    );
}; 