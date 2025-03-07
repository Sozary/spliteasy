
interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, className, variant = 'primary', type = 'button', ...props }: ButtonProps) => {
    const variantClasses = {
        primary: 'bg-[#111827] text-white px-4 py-4 rounded-md font-medium',
        secondary: 'bg-gray-500 text-white'
    }

    return <button className={`${variantClasses[variant]} ${className}`} type={type} {...props}>{children}</button>
}

export default Button;