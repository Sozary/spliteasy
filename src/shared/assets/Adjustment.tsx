const Adjustment = ({ size = 24, color = '#000' }: { size?: number, color?: string }) => {
	return <svg widths={`${size}px`} height={`${size}px`} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M20 4L4 20" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /><path d="M4 7H7M10 7H7M7 7V4M7 7V10" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /><path d="M14 17H17H20" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>

}
export default Adjustment;