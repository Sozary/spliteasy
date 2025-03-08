const Times = ({ color = '#000', size = 48, className, onClick }: { color?: string; size?: number; className?: string, onClick?: () => void }) => (
    <svg
        onClick={onClick}
        width={`${size}px`}
        height={`${size}px`}
        viewBox="0 0 37 37" // Changed viewBox to make it bigger without changing the size
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M32 16L16 32M16 16L32 32" stroke={color} strokeWidth="4" strokeLinecap="round" /> // Adjusted path coordinates and strokeWidth
    </svg>
);

export default Times; 