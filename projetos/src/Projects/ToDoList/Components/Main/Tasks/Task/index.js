import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TaskContext } from '../../../../Context/TaskContext'
import Icon from '../../../Icon'

export default function Task({ id, title, content }){

    const { showHidePopupDelete, findTask } = useContext(TaskContext)

    const goToPage = useNavigate()

    const updateTask = (taskID) =>{
        findTask(taskID)
        goToPage(`newTask/update/${taskID}`)
    }

    return(
        <div id = {id} className = 'task-information'>
            <div>
                <button onClick={() => updateTask(id)}>
                    <Icon className = 'update-task-icon' iconName = 'update'/>
                    Editar
                </button>
                <button onClick={() => showHidePopupDelete(id)}>
                    <Icon className = 'delete-task-icon' iconName = 'delete'/>
                    Deletar
                </button>
            </div>
            <div>
                <div className = 'task-title'><strong>{title}</strong></div>
                <div className = 'task-context'>{content}</div>
            </div>
        </div>
    )
}