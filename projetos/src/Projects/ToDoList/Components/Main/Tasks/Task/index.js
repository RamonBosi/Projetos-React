import { useContext } from 'react'
import { TaskContext } from '../../../../Context/TaskContext'
import Icon from '../../../Icon'

export default function Task(){

    const { showHidePopupDelete } = useContext(TaskContext)

    return(
        <div className = 'task-information'>
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
                <div className = 'task-title'>Titulo</div>
                <div className = 'task-context'>Conteudo</div>
            </div>
        </div>
    )
}