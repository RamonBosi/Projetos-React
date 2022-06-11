import { useContext } from 'react'
import { TaskContext } from '../../../../Context/TaskContext'
import Icon from '../../../Icon'

export default function Task({ id, title, content }){

    const { showHidePopupDelete } = useContext(TaskContext)

    return(
        <div id = {id} className = 'task-information'>
            <div>
                <button>
                    <Icon className = 'update-task-icon' iconName = 'update'/>
                    Editar
                </button>
                <button onClick={() => showHidePopupDelete()}>
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