import "./index.css"

export function RememberMe({ label = "Remember me" }) {
  return (
    <label className="rememberMe">
      <input type="checkbox" />
      <p className="rememberMeText">{label}</p>
    </label>
  )
}
