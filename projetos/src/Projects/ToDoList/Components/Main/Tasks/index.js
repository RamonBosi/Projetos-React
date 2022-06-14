import { useContext, useEffect, useState } from 'react'
import { TaskContext } from '../../../Context/TaskContext'
import { useNavigate } from 'react-router-dom'
import Icon from '../../Icon'
import PopupDelete from '../PopupDelete'
import Task from './Task'

export default function Tasks(){

    const [loadTasks, setLoadTasks] = useState(<></>)

    const { showPopupDelete, getLocalStorage } = useContext(TaskContext)

    const goToPage = useNavigate()

    useEffect(() =>{
        
        if(getLocalStorage('tasks')){
            
            const allTasks = JSON.parse(getLocalStorage('tasks'))
            
            const taskComponents = allTasks.map((task) =>{
                const { taskID, title, content } = task
                return <Task id = {taskID} title = {title} content = {content}/>
            })
    
            setLoadTasks(taskComponents)
        }
    },[])

    return(
        <>
            {showPopupDelete? <PopupDelete/> : <></>}
            <div className = 'task'>
                <div className = 'task-container'>
                    <div className = 'task-button'>
                        <button onClick={() => goToPage('newTask/add')}>
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