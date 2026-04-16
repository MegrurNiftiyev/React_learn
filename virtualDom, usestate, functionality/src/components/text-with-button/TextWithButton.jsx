import "./index.css"

export function TextWithButton({ text, buttonText, onClick }) {
  return (
    <p className="textWithButton">
      {text} <button type="button" className="textWithButtonButton" onClick={onClick}><b>{buttonText}</b></button>
    </p>
  )
}
