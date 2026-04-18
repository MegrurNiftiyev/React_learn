import { faEnvelope, faKey, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { Input } from "../../components/input/Input"
import { Button } from "../../components/button/Button"
import { SizedBox } from '../../components/sized-box/SizedBox'
import { RememberMe } from "../../components/remember-me/RememberMe"
import { TextButton } from "../../components/text-button/TextButton"
import { TextWithButton } from "../../components/text-with-button/TextWithButton"
import { isValidEmail, isValidPassword, isValidUserName, } from '../../helpers/valdiation'
import { Options } from '../../components/options/Options'
import "./index.css"
import { useNavigate } from 'react-router-dom'

export function Login() {

  
    const navigate = useNavigate();

    const navigateToRegister = () => {
        navigate(`/register`);
    };
    const navigateToHome = () => {
        navigate(`/`);
    };
    return (
        <div className="loginBox">
            <div className="box">
                <form>
                    <h2> Login</h2>


                    <Input icon={faEnvelope} validation={isValidEmail} label={"Email"} type="email" placeholder="Enter Email Addres" />
                    <SizedBox height={10} />

                    <Input icon={faKey} validation={isValidPassword} label={"Password"} type="password" placeholder="Enter Password" />
                    <SizedBox height={5} />

                    <div className='lineOption'>
                        <TextButton text="forgot password?" onClick={() => { alert('Forgot password clicked') }} />
                    </div>

                    <SizedBox height={10} />
                    <Button text="Log in" type="submit" onClick={navigateToHome} />

                </form>
                <SizedBox height={20} />
                <TextWithButton
                    text="Don't have an account?"
                    buttonText="register"
                    onClick={navigateToRegister}
                />
                <SizedBox height={20} />
            </div>
        </div>
    );

}