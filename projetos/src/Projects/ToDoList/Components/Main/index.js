import Task from "./Task"
import NewTask from './NewTask'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Main(){
    return(
        <main className = 'main-context'>
            <div className = 'main-container'>
                <BrowserRouter>
                    <Routes>
                        <Route path = '/Projetos-React' element = {<Task/>}/>
                        <Route path = '/Projetos-React/newTask' element = {<NewTask/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </main>
    )
}