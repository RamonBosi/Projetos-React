import Icon from '../../Icon'

export default function Assignment(){
    return(
        <div className = 'assignment-container'>
            <div className = 'assignment-buttons'>
                <button>
                    <Icon componentIcon = 'update-icon' iconName = 'update'/>
                    Editar
                </button>
                <button>
                    <Icon componentIcon = 'delete-icon' iconName = 'delete'/>
                    Deletar
                </button>
            </div>
            <div>
                <input type = 'text' placeholder = 'Título'/>
                <textarea cols = '100' rows = '20'></textarea>
            </div>
        </div>
    )
}