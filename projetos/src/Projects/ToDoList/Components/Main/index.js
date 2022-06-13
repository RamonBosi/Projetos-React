import TaskContextProvider from "../../Context/TaskContext"
import { Routes, Route } from 'react-router-dom'
import Tasks from "./Tasks"
import NewTask from './NewTask'

export default function Main(){
    return(
        <main className = 'main-context'>
            <div className = 'main-container'>
                <TaskContextProvider>
                        <Routes>
                            <Route 
                                path = '/' 
                                element = {<Tasks/>}/>
                            <Route 
                                path = '/newTask/:action' 
                                element = {<NewTask/>}/>
                            <Route 
                                path = '/newTask/:action/:taskID'
                                element = {<NewTask/>}/>
                        </Routes>
                </TaskContextProvider>
            </div>
        </main>
    )
}