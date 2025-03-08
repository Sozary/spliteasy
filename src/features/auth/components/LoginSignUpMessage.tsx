import { Link } from "react-router-dom";

const LoginSignUpMessage = () => {
    return <div className="text-gray-500 font-medium flex justify-center">
        <p>Don't have an account? <Link to="/signup" className="text-[#111827]">Sign up</Link></p>
    </div>
}

export default LoginSignUpMessage;
