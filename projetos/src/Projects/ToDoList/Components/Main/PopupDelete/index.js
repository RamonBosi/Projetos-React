export default function PopupDelete(){
    return(
        <div className = 'popup-delete'>
            <div className = 'popup-delete-container'>
                <p>Deseja mesmo deletar a tarefa: TAREFA ?</p>
                <div className = 'popup-delete-buttons'>
                    <button>Deletar</button>
                    <button>Cancelar</button>
                </div>
            </div>
        </div>
    )
}