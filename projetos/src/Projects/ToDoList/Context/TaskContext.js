import { createContext, useState } from "react";

export const TaskContext = createContext()

export default function TaskContextProvider({ children }){
    
    const [showPopupDelete, setShowPopupDelete] = useState(false)
    const [localizedTask, setLocalizedTask] = useState(null)

    const setLocalStorage = (key, value) =>{
        localStorage.setItem(key, value)
    }

    const getLocalStorage = (key) =>{
        return localStorage.getItem(key)
    }

    const findTask = (task) =>{

        if(getLocalStorage('tasks')){
            const allTasks = JSON.parse(getLocalStorage('tasks'))

            let indexTask = null
            const selectedTask = allTasks.find((t, index) => {

                const { taskID } = t
                if(taskID === task){
                    indexTask = index
                    return t
                }
            })

            setLocalizedTask((oldState) => {
                return {
                    ...oldState,    
                    indexTask,
                    ...selectedTask
                }
            })
        }else{
            setLocalizedTask(null)
        }
        // console.log('Valor do State no contexto')
        // console.log(localizedTask)
    }

    const showHidePopupDelete = (taskID = null) =>{

        if(taskID !== null){
            findTask(taskID)
        }
        setShowPopupDelete(!showPopupDelete)
        document.querySelector('body').classList.toggle('disable-overflow')
    }

    const value = {
        showPopupDelete,
        showHidePopupDelete,
        setLocalStorage,
        getLocalStorage,
        findTask,
        localizedTask
    }

    return(
        <TaskContext.Provider value = {value}>
            {children}
        </TaskContext.Provider>
    )
}