import Icon from '../Icon'

export default function Menu(){
    return(
        <header className = 'menu'>
            <div className = 'menu-container'>
                <Icon className = 'menu-icon' iconName = 'list_alt'/>
                <h1>Lista de tarefas</h1>
            </div>
        </header>
    )
}