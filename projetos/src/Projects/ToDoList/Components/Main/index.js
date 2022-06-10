import Task from "./Task"
import PopupDelete from './PopupDelete'

export default function Main(){
    return(
        <main className = 'main-context'>
            <div className = 'main-container'>
                <PopupDelete/>
            </div>
        </main>
    )
}