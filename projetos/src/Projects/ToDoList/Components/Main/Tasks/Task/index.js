import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TaskContext } from '../../../../Context/TaskContext'
import Icon from '../../../Icon'

export default function Task({ id, title, content }){

    const { showHidePopupDelete } = useContext(TaskContext)
    const goToPage = useNavigate()

    return(
        <div id = {id} className = 'task-information'>
            <div>
                <button onClick={() => goToPage(`/Projetos-React/newTask/update/${id}`)}>
                    <Icon className = 'update-task-icon' iconName = 'update'/>
                    Editar
                </button>
                <button onClick={() => showHidePopupDelete(id)}>
                    <Icon className = 'delete-task-icon' iconName = 'delete'/>
                    Deletar
                </button>
            </div>
            <div>
                <div className = 'task-title'>{title}</div>
                <div className = 'task-context'>{content}</div>
            </div>
        </div>
    )
}