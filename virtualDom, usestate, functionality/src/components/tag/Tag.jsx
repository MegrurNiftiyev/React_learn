
import { useState } from 'react'
import { Modal } from '../modal/Modal'
import './index.css'

export function Tag({ text, description }) {
  
    const [isModalVisible, changeModelState] = useState(false)
  
    function changeVisibiltyState() {
        changeModelState(!isModalVisible)
    }

    return <>
        {isModalVisible && <Modal title={text} content={description} isShowing={changeModelState} />}
        <div onClick={changeVisibiltyState} className="tag">{text}</div>
    </>
    
}
