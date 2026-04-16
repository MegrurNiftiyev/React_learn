import { faEnvelope, faKey, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { Input } from "../../components/input/Input"
import { Button } from "../../components/button/Button"
import { SizedBox } from '../../components/sized-box/SizedBox'
import { RememberMe } from "../../components/remember-me/RememberMe"
import { TextButton } from "../../components/text-button/TextButton"
import { TextWithButton } from "../../components/text-with-button/TextWithButton"
import "./index.css"


export function Register() {
    return (
        <div className="registerBox">
            <form>
                <h2> Register</h2>
                <Input icon={faUser} label={"User Name"} type="text" placeholder="Enter User Name" />
                <SizedBox height={10} />

                <Input icon={faEnvelope} label={"Email"} type="email" placeholder="Enter Email Addres" />
                <SizedBox height={10} />

                <Input icon={faKey} label={"Password"} type="password" placeholder="Enter Password" />
                <div className='lineOption'>
                    <RememberMe />
                    <TextButton text="forgot password?" onClick={() => { alert('Forgot password clicked') }} />

                </div>
                <Button text="Register" type="submit" onClick={() => { alert('Form not submited') }} />

            </form>

            <SizedBox height={20} />

            <TextWithButton
                text="Or alredy have an account?"
                buttonText="log in"
                onClick={() => { alert('Navigate to login') }}
            />
            <SizedBox height={20} />

        </div>
    )
}