const Chevron = ({ size = 24, color = '#000' }: { size?: number, color?: string }) => {
	return <svg widths={`${size}px`} height={`${size}px`} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M15 6L9 12L15 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>

}
export default Chevron;