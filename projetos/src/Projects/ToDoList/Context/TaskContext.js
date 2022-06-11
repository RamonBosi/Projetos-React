import { createContext, useState } from "react";

export const TaskContext = createContext()

export default function TaskContextProvider({ children }){
    
    const [showPopupDelete, setShowPopupDelete] = useState(false)

    const showHidePopupDelete = () =>{
        setShowPopupDelete(!showPopupDelete)
        document.querySelector('body').classList.toggle('disable-overflow')
    }

    const value = {
        showPopupDelete,
        showHidePopupDelete
    }

    return(
        <TaskContext.Provider value = {value}>
            {children}
        </TaskContext.Provider>
    )
}