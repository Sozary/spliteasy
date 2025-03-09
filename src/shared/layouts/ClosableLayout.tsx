import React from "react";
import { ReactNode } from "react";

interface ClosableLayoutProps {
    children: ReactNode;
    onClose: () => void;
    className?: string;
}
export const ClosableLayout = ({ children, onClose, className }: ClosableLayoutProps) => {
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { onClose });
        }
        return child;
    });

    return (
        <div className={className}>
            {childrenWithProps}
        </div>
    )
}