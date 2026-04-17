import { faEnvelope, faKey, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { Input } from "../../components/input/Input"
import { Button } from "../../components/button/Button"
import { SizedBox } from '../../components/sized-box/SizedBox'
import { RememberMe } from "../../components/remember-me/RememberMe"
import { TextButton } from "../../components/text-button/TextButton"
import { TextWithButton } from "../../components/text-with-button/TextWithButton"
import "./index.css"
import { isValidEmail, isValidPassword, isValidUserName, } from '../../helpers/valdiation'
import { Options } from '../../components/options/Options'


export function Register() {
    const langs = [
        { id: 1, label: "en", value: "English" },
        { id: 2, label: "az", value: "Azerbaijan" },
        { id: 3, label: "tr", value: "Turkis" },

    ];
    return (
        <div className="registerBox">
           <div className='box'>
          <form>
                {/* <Options options={langs} /> */}
                <h2> Register</h2>
                <Input icon={faUser} validation={isValidUserName} label={"User Name"} type="text" placeholder="Enter User Name" />
                <SizedBox height={10} />

                <Input icon={faEnvelope} validation={isValidEmail} label={"Email"} type="email" placeholder="Enter Email Addres" />
                <SizedBox height={10} />

                <Input icon={faKey} validation={isValidPassword} label={"Password"} type="password" placeholder="Enter Password" />
                <SizedBox height={5} />
                <div className='lineOption'>
                    <RememberMe />
                    <TextButton text="forgot password?" onClick={() => { alert('Forgot password clicked') }} />

                </div>
                <SizedBox height={10} />
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
        </div>
    )
}