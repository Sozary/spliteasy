import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from 'class-variance-authority';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    type?: 'button' | 'submit' | 'reset';
}
interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const buttonVariants = cva(
    'rounded-md font-medium transition-colors focus:outline-none focus:ring-2',
    {
        variants: {
            variant: {
                primary: 'bg-[#111827] text-white hover:bg-gray-800',
                secondary: 'bg-gray-500 text-white hover:bg-gray-600',
            },
            size: {
                default: 'h-10 px-4',
                large: 'h-12 px-6',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'default',
        },
    }
);
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={buttonVariants({ variant, size, className })}
                ref={ref}
                {...props}
            />
        );
    }
);