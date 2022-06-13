import Tasks from "./Tasks"
import NewTask from './NewTask'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskContextProvider from "../../Context/TaskContext"

export default function Main(){
    return(
        <main className = 'main-context'>
            <div className = 'main-container'>
                <TaskContextProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path = '/Projetos-React' element = {<Tasks/>}/>
                            <Route path = '/Projetos-React/newTask/:action' element = {<NewTask/>}/>
                            <Route path = '/Projetos-React/newTask/:action/:taskID' element = {<NewTask/>}/>
                        </Routes>
                    </BrowserRouter>
                </TaskContextProvider>
            </div>
        </main>
    )
}