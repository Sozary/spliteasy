// GroupViewLayout is a layout that is used to display a group or add a new group/expense, with a button at the bottom
import { ReactNode } from "react";
import Button from "../../shared/components/Button";
import Times from "./assets/Times";
import Chevron from "../../shared/assets/Chevron";

interface ButtonViewLayoutProps {
    children: ReactNode;
    title: string;
    discardable?: boolean;
    onDiscard?: () => void;
    actionButtonLabel: string;
    onActionButtonClick?: () => void;
    fullWidth?: boolean;
    backButton?: boolean;
}

interface TopBarProps {
    title: string;
    discardable?: boolean;
    onDiscard?: () => void;
    backButton?: boolean;
}

interface BottomBarProps {
    actionButtonLabel: string;
    onActionButtonClick?: () => void;
}

const TopBar = ({ title, discardable, onDiscard, backButton }: TopBarProps) => {
    return (
        <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
            <Chevron size={backButton ? 24 : 0} color="#111827" />
            <span className="text-xl font-medium text-[#111827] flex-grow text-center">{title}</span>
            <Times size={discardable ? 24 : 0} onClick={onDiscard} />
        </div>
    )
}

const BottomBar = ({ actionButtonLabel, onActionButtonClick }: BottomBarProps) => {
    return <div className="flex justify-between items-center p-4 bg-white border-t border-gray-200">
        <Button className="w-full" onClick={onActionButtonClick}>{actionButtonLabel}</Button>
    </div>
}
export const ButtonViewLayout = ({ children, title, discardable, onDiscard, actionButtonLabel, onActionButtonClick, backButton, fullWidth }: ButtonViewLayoutProps) => {
    return (
        <div className="flex flex-col h-screen">
            <TopBar title={title} discardable={discardable} onDiscard={onDiscard} backButton={backButton} />
            <div className={`flex-grow max-h-[calc(100vh-142px)] overflow-y-auto gap-5 flex flex-col ${fullWidth ? 'p-0' : 'p-5'}`}>
                {children}
            </div>
            <BottomBar actionButtonLabel={actionButtonLabel} onActionButtonClick={onActionButtonClick} />
        </div >
    );
}; 