interface Option {
    value: string;
    label: string;
}

interface InputProps {
    name?: string;
    label?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    logo?: React.ReactNode;
    variant?: 'input' | 'select';
    options?: Option[];
    className?: string;
}

const Input = ({
    name = '',
    label = '',
    type = "text",
    placeholder = '',
    value = '',
    onChange = () => { },
    logo,
    variant = 'input',
    options = [],
    className = '',
}: InputProps) => {
    return <div className="flex gap-2 flex-col">
        {label && <label htmlFor={name}>{label}</label>}
        <div className="relative w-full">
            {logo && (
                <div className="absolute top-1/2 -translate-y-1/2 left-2">
                    {logo}
                </div>
            )}
            {variant === 'input' ? (
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`border border-gray-300 rounded-md p-2 w-full bg-white ${logo ? "pl-10" : ""
                        } ${className}`}
                />
            ) : (
                <select
                    value={value}
                    onChange={onChange}
                    className={`border border-gray-300 rounded-md p-2 w-full bg-white appearance-none ${logo ? "pl-10" : ""
                        } ${className}`}
                >
                    {placeholder && (
                        <option value="" disabled>
                            {placeholder}
                        </option>
                    )}
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            )}
            {variant === 'select' && (
                <div className="absolute top-1/2 -translate-y-1/2 right-2 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            )}
        </div>
    </div>
}

export default Input;