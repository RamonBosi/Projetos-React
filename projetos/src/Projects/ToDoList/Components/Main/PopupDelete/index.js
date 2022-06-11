import { useContext, useState } from 'react'
import { TaskContext } from '../../../Context/TaskContext'

export default function PopupDelete(){

    const [widthHeight] = useState(() =>{
        return {
            width: document.defaultView.innerWidth,
            height: document.defaultView.innerHeight
        }
    })
    
    const { showHidePopupDelete } = useContext(TaskContext)

    return(
        <div style={widthHeight} className = 'popup-delete'>
            <div className = 'popup-delete-container'>
                <p>Deseja mesmo deletar a tarefa: <strong>TAREFA</strong> ?</p>
                <div>
                    <button>Deletar</button>
                    <button onClick={() => showHidePopupDelete()}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}