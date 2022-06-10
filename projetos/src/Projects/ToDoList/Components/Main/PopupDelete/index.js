import { useState } from 'react'

export default function PopupDelete(){

    const [widthHeight] = useState(() =>{
        return {
            width: document.defaultView.innerWidth,
            height: document.defaultView.innerHeight
        }
    })

    return(
        <div style={widthHeight} className = 'popup-delete'>
            <div className = 'popup-delete-container'>
                <p>Deseja mesmo deletar a tarefa: <strong>TAREFA</strong> ?</p>
                <div>
                    <button>Deletar</button>
                    <button>Cancelar</button>
                </div>
            </div>
        </div>
    )
}