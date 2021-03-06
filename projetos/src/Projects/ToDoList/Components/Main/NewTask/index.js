import { useContext, useEffect, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ContextProjectRoutes } from "../../../../../Routes/RouteContext"
import { TaskContext } from "../../../Context/TaskContext"

export default function NewTask(){

    const { rootRoute } = useContext(ContextProjectRoutes)

    const { 
        setLocalStorage, 
        getLocalStorage,  
        localizedTask 
    } = useContext(TaskContext)

    const { inputValue, textAreaValue } = {
        inputValue: useRef(),
        textAreaValue: useRef()
    }

    const { action } = useParams()

    const goToPage = useNavigate()

    const homePage = `${rootRoute}/ToDoList`

    useEffect(() =>{

        if(action === 'update'){

            if(!localizedTask){ 
                goToPage(homePage)
            }
        }
    },[])

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
        goToPage(homePage)
    }

    const updateTask = () =>{

        const title = inputValue.current.value
        const content = textAreaValue.current.value
        const allTasks = JSON.parse(getLocalStorage('tasks'))
        const { indexTask, ...rest } = localizedTask

        allTasks[indexTask] = {
            ...rest,
            title,
            content
        }

        setLocalStorage('tasks', JSON.stringify(allTasks))
        goToPage(homePage)
    }

    const addDefaultValue = (valueType)=>{
        
        if(action === 'add'){
            return ''
        }else{
            if(localizedTask){
                const { title, content } = localizedTask

                if(valueType === 'title'){
                    return title
                }else{
                    return content
                }
            }else{
                return ''
            }
        }
    }

    return(
        <div className = 'new-task'>
            <div className = 'new-task-container'>
                <div className = 'create-new-task'>
                    <input 
                        defaultValue = {addDefaultValue('title')}
                        ref = {inputValue} 
                        type = 'text' 
                        placeholder = 'T??tulo'/>
                    <textarea 
                        defaultValue = {addDefaultValue('content')}
                        ref = {textAreaValue}
                        cols = '100' 
                        rows = '15'>
                    </textarea>
                </div>
                <div className = 'new-task-buttons'>
                    <button 
                    onClick={() => action === 'add' ? addTask() : updateTask()}>
                        {action === 'add' ? 'Cadastrar' : 'Editar'}
                    </button>
                    <button onClick={() => goToPage(homePage)}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}