import { useContext, useEffect, useRef } from "react"
import { useNavigate, useParams, useHref } from "react-router-dom"
import { TaskContext } from "../../../Context/TaskContext"

export default function NewTask(){

    const { 
        setLocalStorage, 
        getLocalStorage, 
        findTask, 
        localizedTask 
    } = useContext(TaskContext)

    const { inputValue, textAreaValue } = {
        inputValue: useRef(),
        textAreaValue: useRef()
    }

    const goToPage = useNavigate()

    const addTask = () =>{

        const taskKey = 'tasks'

        const createId = () =>{
            const ID = 'ID'
            
            if(!getLocalStorage(ID)){
                setLocalStorage(ID, '1')
            }else{
                const previousId = Number(getLocalStorage(ID)) + 1
                setLocalStorage(ID, previousId)
            }

            return getLocalStorage(ID)
        }
        
        const loadTasks = () =>{

            if(!getLocalStorage(taskKey)){
                setLocalStorage(taskKey, JSON.stringify([]))
            }

            return JSON.parse(getLocalStorage(taskKey))
        }

        const createTask =  () =>{
            const title = inputValue.current.value
            const content = textAreaValue.current.value
            const ID = createId()
            const allTasks = loadTasks()

            allTasks.unshift({
                taskID: `task-${ID}`, 
                title, 
                content
            })

            return allTasks
        }

        setLocalStorage(taskKey, JSON.stringify(createTask()))
        goToPage('/Projetos-React')
    }

    const { action, taskID } = useParams()

    useEffect(() =>{
        
        console.log(localizedTask)
    },[taskID])

    return(
        <div className = 'new-task'>
            <div className = 'new-task-container'>
                <div className = 'create-new-task'>
                    <input 
                        // defaultValue = {title === null? '' : title}
                        ref = {inputValue} 
                        type = 'text' 
                        placeholder = 'Título'/>
                    <textarea 
                        // defaultValue = {action === 'add'? '' : content} 
                        ref = {textAreaValue}
                        cols = '100' 
                        rows = '15'>
                    </textarea>
                </div>
                <div className = 'new-task-buttons'>
                    <button onClick={() => addTask()}>
                        {action === 'add'? 'Cadastrar' : 'Editar'}
                    </button>
                    <button onClick={() => goToPage('/Projetos-React')}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}