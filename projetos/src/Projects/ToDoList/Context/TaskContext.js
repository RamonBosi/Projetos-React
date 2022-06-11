import { createContext, useState } from "react";

export const TaskContext = createContext()

export default function TaskContextProvider({ children }){
    
    const [showPopupDelete, setShowPopupDelete] = useState(false)
    const [taskToBeDeleted, setTaskToBeDeleted] = useState(null)

    const showHidePopupDelete = (task) =>{
        setShowPopupDelete(!showPopupDelete)
        document.querySelector('body').classList.toggle('disable-overflow')
    }

    const setLocalStorage = (key, value) =>{
        localStorage.setItem(key, value)
    }

    const getLocalStorage = (key) =>{
        return localStorage.getItem(key)
    }

    const value = {
        showPopupDelete,
        showHidePopupDelete,
        setLocalStorage,
        getLocalStorage
    }

    return(
        <TaskContext.Provider value = {value}>
            {children}
        </TaskContext.Provider>
    )
}