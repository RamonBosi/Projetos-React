import Icon from '../Icon'
import Assignment from './Assignment'

export default function Main(){
    return(
        <main className = 'main-context'>
            <div className = 'main-container'>
                <div>
                    <button className = 'button-add-list'>
                        <Icon componentIcon = 'add-icon' iconName = 'playlist_add'/>
                        Cadastrar Tarefa
                    </button>
                </div>
                <Assignment/>
            </div>
        </main>
    )
}