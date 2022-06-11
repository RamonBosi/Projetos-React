import { useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function NewTask(){

    const goToPage = useNavigate()

    const { inputValue, textAreaValue } = {
        inputValue: useRef(),
        textAreaValue: useRef()
    }

    const addTask = () =>{
       const input = inputValue.current.value
       const textarea = textAreaValue.current.value

       const task = [
            {taskId: '1', input, textarea}
        ]

       localStorage.setItem('tasks', JSON.stringify(task))
    }

    return(
        <div className = 'new-task'>
            <div className = 'new-task-container'>
                <div className = 'create-new-task'>
                    <input ref = {inputValue} type = 'text' placeholder = 'Título'/>
                    <textarea ref = {textAreaValue}cols = '100' rows = '15'></textarea>
                </div>
                <div className = 'new-task-buttons'>
                    <button onClick={() => addTask()}>Cadastrar</button>
                    <button onClick={() => goToPage('/Projetos-React')}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}