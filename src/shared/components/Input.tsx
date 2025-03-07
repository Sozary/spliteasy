interface InputProps {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    logo?: React.ReactNode;
}

const Input = ({ name, label, type = "text", placeholder = '', value = '', onChange, logo }: InputProps) => {
    return <div className="flex gap-2 flex-col">
        <label htmlFor={name}>{label}</label>
        <div className="relative">
            {logo && <div className="absolute top-1/2 -translate-y-1/2 left-2">{logo}</div>}
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="pl-10 border border-gray-300 rounded-md p-2 w-full bg-white" />
        </div>
    </div>
}

export default Input;