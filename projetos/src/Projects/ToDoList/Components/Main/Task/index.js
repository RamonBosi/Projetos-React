import { useNavigate } from 'react-router-dom'
import Icon from '../../Icon'
import PopupDelete from '../PopupDelete'

export default function Task(){

    const goTo = useNavigate()

    return(
        <div className = 'task'>
            <div className = 'task-container'>
                <div className = 'task-button'>
                    <button onClick={() => goTo('/Projetos-React/newTask')}>
                        <Icon 
                            className = 'add-task-icon' 
                            iconName = 'playlist_add'
                        />
                        Cadastrar Tarefa
                    </button>
                </div>
                <div className = 'task-information'>
                    <div>
                        <button>
                            <Icon className = 'update-task-icon' iconName = 'update'/>
                            Editar
                        </button>
                        <button>
                            <Icon className = 'delete-task-icon' iconName = 'delete'/>
                            Deletar
                        </button>
                    </div>
                    <div>
                        <div className = 'task-title'>Titulo</div>
                        <div className = 'task-context'>Conteudo</div>
                    </div>
                </div>
            </div>
        </div>
    )
}