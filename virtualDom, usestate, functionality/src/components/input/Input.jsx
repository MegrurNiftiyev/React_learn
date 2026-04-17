import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SizedBox } from '../sized-box/SizedBox'
import { useState } from 'react'
import "./index.css"

export function Input({ icon, label, placeholder, validation, type }) {
    const [isValid, setValdiation] = useState(true)

    function checkValidation(value) {
        if (validation(value)) {
            setValdiation(true)
            console.log('valid')
        } else {
            setValdiation(false)
            console.log('not valid')
        }
    }
    return <>
        <p className='label' > {label}</p>
        <div className="input">
            <div className='icon'>
                <FontAwesomeIcon icon={icon} />
            </div>
            <input
                onFocus={() => { console.log('focused') }}
                className="inputField" placeholder={placeholder}
                onBlur={(e) => {
                    checkValidation(e.target.value)
                }}
                type={type}
            />
        </div>
        {isValid && <SizedBox height={5} /> }

        <p style={{ fontSize: isValid ? "0px" : "12px" }} className='validationText'>Not valid</p>
    </>
}