import { SizedBox } from "../sized-box/SizedBox"
import "./index.css"

export function Modal({ isShowing, title, content }) {
    return (
        <>

            <div className="modalContainer">
                <div className="modalContent">
                    <div className="modalBody">
                        <span onClick={() => { isShowing(false) }} className="modalCloseBtn">&times;</span>
                        <h1> {title}</h1>
                        <SizedBox height={20} />
                        <p> {content}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
