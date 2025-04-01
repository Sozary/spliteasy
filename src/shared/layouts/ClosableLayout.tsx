import React, { ReactElement } from "react";

interface ClosableComponentProps {
    onClose: () => void;
}

interface ClosableLayoutProps {
    children: ReactElement<ClosableComponentProps> | ReactElement<ClosableComponentProps>[];
    onClose: () => void;
    className?: string;
}

export const ClosableLayout = ({ children, onClose, className }: ClosableLayoutProps) => {
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement<ClosableComponentProps>(child)) {
            return React.cloneElement(child, { onClose });
        }
        return child;
    });

    return (
        <div className={className}>
            {childrenWithProps}
        </div>
    );
};
