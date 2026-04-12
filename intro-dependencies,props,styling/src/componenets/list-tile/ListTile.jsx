import "./ListTile.css"


function ListTile({ title, subtitle }) {
    if (title == null)
        title = "empty"
    if (subtitle == null)
        subtitle = "empty"
    return (
        <div className="listTile">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
        </div>
    )
}

export default ListTile