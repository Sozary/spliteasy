const Home = ({ size = 24, color = '#000' }: { size?: number, color?: string }) => {
    return <svg widths={`${size}px`} height={`${size}px`} fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 0L0 6V8H1V15H4V10H7V15H15V8H16V6L14 4.5V1H11V2.25L8 0ZM9 10H12V13H9V10Z" fill={color} />
    </svg>

}
export default Home;