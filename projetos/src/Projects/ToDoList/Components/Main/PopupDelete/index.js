import { useContext, useState } from 'react'
import { TaskContext } from '../../../Context/TaskContext'

export default function PopupDelete(){

    const [widthHeight] = useState(() =>{
        return {
            width: document.defaultView.innerWidth,
            height: document.defaultView.innerHeight
        }
    })
    
    const { 
        showHidePopupDelete, 
        localizedTask, 
        setLocalStorage, 
        getLocalStorage 
    } = useContext(TaskContext)

    const { title } = localizedTask

    const deleteTask = ()=>{

        const allTasks = JSON.parse(getLocalStorage('tasks'))
        const { taskID, indexTask } = localizedTask

        allTasks.splice(indexTask, 1)
        document.querySelector(`#${taskID}`).remove()
        setLocalStorage('tasks', JSON.stringify(allTasks))
        showHidePopupDelete()
    }

    return(
        <div style={widthHeight} className = 'popup-delete'>
            <div className = 'popup-delete-container'>
                <p>Deseja mesmo deletar a tarefa: <strong>{title}</strong> ?</p>
                <div>
                    <button onClick={() => deleteTask()}>Deletar</button>
                    <button onClick={() => showHidePopupDelete()}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}