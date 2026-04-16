import "./index.css"

export function TextButton({ text, onClick }) {
  return (
    <button type="button" className="textButton" onClick={onClick}>
      {text}
    </button>
  )
}
