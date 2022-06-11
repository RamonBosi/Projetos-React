import { useContext, useEffect, useState } from 'react'
import { TaskContext } from '../../../Context/TaskContext'
import { useNavigate } from 'react-router-dom'
import Icon from '../../Icon'
import PopupDelete from '../PopupDelete'
import Task from './Task'

export default function Tasks(){

    const { showPopupDelete, getLocalStorage } = useContext(TaskContext)

    const goToPage = useNavigate()

    const [loadTasks, setLoadTasks] = useState(<></>)

    useEffect(() =>{
        const allTasks = JSON.parse(getLocalStorage('tasks'))
        
        const taskComponents = allTasks.map((task) =>{
            const { taskID, title, content } = task
            return <Task id = {taskID} title = {title} content = {content}/>
        })

        setLoadTasks(taskComponents)

    },[])

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
                    {loadTasks}
                </div>
            </div>
        </>
    )
}