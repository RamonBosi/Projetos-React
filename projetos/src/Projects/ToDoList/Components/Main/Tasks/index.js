import { useContext } from 'react'
import { TaskContext } from '../../../Context/TaskContext'
import { useNavigate } from 'react-router-dom'
import Icon from '../../Icon'
import PopupDelete from '../PopupDelete'
import Task from './Task'

export default function Tasks(){

    const { showPopupDelete } = useContext(TaskContext)

    const goToPage = useNavigate()

    return(
        <>
            {showPopupDelete? <PopupDelete/> : <></>}
            <div className = 'task'>
                <div className = 'task-container'>
                    <div className = 'task-button'>
                        <button onClick={() => goToPage('/Projetos-React/newTask')}>
                            <Icon 
                                className = 'add-task-icon' 
                                iconName = 'playlist_add'
                            />
                            Cadastrar Tarefa
                        </button>
                    </div>
                    <Task/>
                </div>
            </div>
        </>
    )
}