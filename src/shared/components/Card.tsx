type CardProps = {
    variant?: 'stats' | 'user' | 'transaction';
    icon?: React.ReactNode;
    actionIcon?: React.ReactNode;
    onActionIconClick?: () => void;
    title?: string;
    description?: string;
    value?: string;
}
const TransactionCard = ({ title, description, value }: CardProps) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
                <p className="text-xl text-[#111827] font-medium">{title}</p>
                <h3 className="font-medium text-gray-500">{description}</h3>
            </div>
            <span>{value}</span>
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
const Card = ({ variant = 'stats', icon, title, description, value, actionIcon, onActionIconClick }: CardProps) => {
    return (
        <div className={`bg-white rounded-lg p-4 shadow-sm flex flex-col gap-2`}>
            {variant === 'transaction' && <TransactionCard title={title} description={description} value={value} />}
            {variant === 'stats' && <StatsCard title={title} description={description} value={value} />}
            {variant === 'user' && <UserCard title={title} actionIcon={actionIcon} onActionIconClick={onActionIconClick} icon={icon} />}
        </div>
    )
}

export default Card;