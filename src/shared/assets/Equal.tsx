const Equal = ({ size = 24, color = '#000' }: { size?: number, color?: string }) => {
	return <svg widths={`${size}px`} height={`${size}px`} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 8C2.44772 8 2 8.44772 2 9C2 9.55228 2.44772 10 3 10H21C21.5523 10 22 9.55228 22 9C22 8.44772 21.5523 8 21 8H3Z" fill={color} />
		<path d="M3 14C2.44772 14 2 14.4477 2 15C2 15.5523 2.44772 16 3 16H21C21.5523 16 22 15.5523 22 15C22 14.4477 21.5523 14 21 14H3Z" fill={color} /></svg>

}
export default Equal;