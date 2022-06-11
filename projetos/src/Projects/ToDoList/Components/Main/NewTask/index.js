import { useContext, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { TaskContext } from "../../../Context/TaskContext"

export default function NewTask(){

    const { setLocalStorage, getLocalStorage } = useContext(TaskContext)

    const goToPage = useNavigate()

    const { inputValue, textAreaValue } = {
        inputValue: useRef(),
        textAreaValue: useRef()
    }

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

    return(
        <div className = 'new-task'>
            <div className = 'new-task-container'>
                <div className = 'create-new-task'>
                    <input defaultValue = 'titulo teste'ref = {inputValue} type = 'text' placeholder = 'Título'/>
                    <textarea defaultValue = 'valor teste' ref = {textAreaValue}cols = '100' rows = '15'></textarea>
                </div>
                <div className = 'new-task-buttons'>
                    <button onClick={() => addTask()}>Cadastrar</button>
                    <button onClick={() => goToPage('/Projetos-React')}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}