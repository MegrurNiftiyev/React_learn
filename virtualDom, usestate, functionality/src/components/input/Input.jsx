
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./index.css"

export function Input({ icon,label, placeholder, type }) {
    return <>
    <p className='label' > {label}</p>
    <div className="input">
        <div className='icon'>
            <FontAwesomeIcon icon={icon} />
        </div>
        <input className="inputField" placeholder={placeholder} type={type} />
    </div>
    </>
}