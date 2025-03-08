import User from "../../shared/assets/User";
import { Button } from "../../shared/components/Button";
import Input from "../../shared/components/Input";
import { AuthenticationLayout } from "../../shared/layouts/AuthenticationLayout";
import Password from "../auth/assets/Password";
import SignUpSignUpMessage from "../auth/components/SignUpSignUpMessage";

export default function SignUpPage() {
    return (
        <AuthenticationLayout>
            <div className="flex flex-col gap-5 bg-white p-5 rounded-md border border-gray-200">
                <h1 className="text-2xl text-[#111827] font-medium">Create an account</h1>
                <form className="flex flex-col gap-5">
                    <Input logo={<User />} name="username" label="Username" type="text" placeholder="Enter your username" value="" onChange={() => { }} />
                    <Input logo={<Password />} name="password" label="Password" type="password" placeholder="Enter your password" value="" onChange={() => { }} />
                    <Button type="submit">Sign Up</Button>
                </form>
            </div>
            <SignUpSignUpMessage />
        </AuthenticationLayout>
    )
}
