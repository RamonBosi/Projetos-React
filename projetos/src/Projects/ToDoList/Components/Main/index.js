import Task from "./Task"
import PopupDelete from './PopupDelete'
import NewTask from './NewTask'

export default function Main(){
    return(
        <main className = 'main-context'>
            <div className = 'main-container'>
                <NewTask/>
            </div>
        </main>
    )
}