import { useNavigate } from "react-router-dom"

export default function NewTask(){

    const goTo = useNavigate()

    return(
        <div className = 'new-task'>
            <div className = 'new-task-container'>
                <div className = 'create-new-task'>
                    <input type = 'text' placeholder = 'Título'/>
                    <textarea cols = '100' rows = '15'></textarea>
                </div>
                <div className = 'new-task-buttons'>
                    <button>Editar</button>
                    <button onClick={() => goTo('/Projetos-React')}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}