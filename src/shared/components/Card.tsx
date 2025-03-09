type CardProps = {
    variant?: 'stats' | 'user' | 'transaction' | 'expense' | 'userOwe';
    icon?: React.ReactNode;
    actionIcon?: React.ReactNode;
    onActionIconClick?: () => void;
    title?: string;
    description?: string;
    value?: string;
    className?: string;
}
const TransactionCard = ({ title, description, value }: CardProps) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
                <p className="text-xl text-[#111827] font-medium">{title}</p>
                <h3 className="font-medium text-gray-500">{description}</h3>
            </div>
            <span className="text-[#111827] font-medium">{value}</span>
        </div>
    )
}
const StatsCard = ({ title, description }: CardProps) => {
    return (
        <div className="flex flex-col gap-1">
            <h3 className="font-medium text-gray-500">{title}</h3>
            <p className="text-2xl text-[#111827] font-bold">{description}</p>
        </div>
    )
}
const UserCard = ({ title, actionIcon, onActionIconClick, icon }: CardProps) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                {icon && <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">{icon}</div>}
                {title && <h3 className="font-medium text-gray-500">{title}</h3>}
            </div>
            {actionIcon && <button onClick={onActionIconClick}>{actionIcon}</button>}
        </div>
    )
}
const UserOweCard = ({ title, actionIcon, onActionIconClick, icon, description }: CardProps) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                {icon && <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">{icon}</div>}
                <div className="flex flex-col">
                    {title && <h3 className="font-medium text-[#111827]">{title}</h3>}
                    {description && <h3 className="font-medium text-gray-500">{description}</h3>}
                </div>
            </div>
            {actionIcon && <button onClick={onActionIconClick}>{actionIcon}</button>}
        </div>
    )
}
const ExpenseCard = ({ title, value, icon, description }: CardProps) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                {icon && <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">{icon}</div>}
                <div className="flex flex-col">
                    <p className="text-[#111827] font-medium">{title}</p>
                    <h3 className=" text-gray-500">{description}</h3>
                </div>
            </div>
            <span className="text-[#111827] font-medium">{value}</span>
        </div>
    )
}
const Card = ({ variant = 'stats', icon, title, description, value, actionIcon, onActionIconClick, className }: CardProps) => {
    return (
        <div className={`rounded-lg p-4 shadow-sm flex flex-col gap-2 ${variant === 'userOwe' ? 'bg-[#f3f4f6]' : 'bg-white'} ${className}`}>
            {variant === 'transaction' && <TransactionCard title={title} description={description} value={value} />}
            {variant === 'stats' && <StatsCard title={title} description={description} value={value} />}
            {variant === 'user' && <UserCard title={title} actionIcon={actionIcon} onActionIconClick={onActionIconClick} icon={icon} />}
            {variant === 'userOwe' && <UserOweCard title={title} actionIcon={actionIcon} onActionIconClick={onActionIconClick} icon={icon} description={description} />}
            {variant === 'expense' && <ExpenseCard title={title} value={value} icon={icon} description={description} />}
        </div>
    )
}

export default Card;