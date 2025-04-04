const Percent = ({ size = 24, color = '#000' }: { size?: number, color?: string }) => {
	return <svg widths={`${size}px`} height={`${size}px`} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M5 19L19 5M9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7C5 5.89543 5.89543 5 7 5C8.10457 5 9 5.89543 9 7ZM19 17C19 18.1046 18.1046 19 17 19C15.8954 19 15 18.1046 15 17C15 15.8954 15.8954 15 17 15C18.1046 15 19 15.8954 19 17Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
export default Percent;