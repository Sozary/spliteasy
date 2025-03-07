import Logo from "../../../shared/assets/Logo";

const Navbar = () => {
    return <div className="flex items-center justify-center gap-2 py-5 border-b border-gray-200">
        <Logo color="#111827" size={32} />
        <h1 className="text-2xl text-[#111827]">SplitEasy</h1>
    </div>;
}
export default Navbar;