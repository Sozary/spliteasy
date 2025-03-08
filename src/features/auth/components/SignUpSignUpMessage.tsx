import { Link } from "react-router-dom";

const SignUpSignUpMessage = () => {
    return <div className="text-gray-500 font-medium flex justify-center">
        <p>Already have an account? <Link to="/login" className="text-[#111827]">Sign in</Link></p>
    </div>
}

export default SignUpSignUpMessage;
