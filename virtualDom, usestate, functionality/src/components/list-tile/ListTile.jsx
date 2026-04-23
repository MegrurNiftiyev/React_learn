import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function ListTile({ title, content, icon }) {
  return (
    <div className="listTile">
      <div className="listTileTop">
        <div className="listTileIconBox">
          <FontAwesomeIcon icon={icon} className="listTileIcon" />
        </div>
        <h3 className="listTileTitle">{title}</h3>
      </div>
      <p className="listTileContent">{content}</p>
    </div>
  )
}
