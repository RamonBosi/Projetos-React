import { Routes, Route } from 'react-router-dom'
import Home from './Components'
import './Styles/index.css'

export default function ToDoList() {
    return (
        <Routes>
            <Route path = '/*' element = {<Home/>}/>
        </Routes>
    )
}