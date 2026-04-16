import "./index.css"

export function Button({ text, onClick, type = "button" }) {
    return(<div className="button"> <button type={type} onClick={onClick} >
        {text}
    </button></div>
    
    )
}