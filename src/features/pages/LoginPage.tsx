import User from "../../shared/assets/User";
import Button from "../../shared/components/Button";
import Input from "../../shared/components/Input";
import Password from "../auth/assets/Password";
import LoginMessage from "../auth/components/LoginMessage";
import LoginSignUpMessage from "../auth/components/LoginSignUpMessage";
import { AuthenticationLayout } from "../layouts/AuthenticationLayout";

export default function LoginPage() {
    return (<AuthenticationLayout>
        <LoginMessage />
        <form className="flex flex-col gap-5">
            <Input logo={<User />} name="Username" label="Username" type="text" placeholder="Enter your username" value="" onChange={() => { }} />
            <Input logo={<Password />} name="password" label="Password" type="password" placeholder="Enter your password" value="" onChange={() => { }} />
            <Button type="submit">Sign In</Button>
        </form>
        <LoginSignUpMessage />
    </AuthenticationLayout>)
}
