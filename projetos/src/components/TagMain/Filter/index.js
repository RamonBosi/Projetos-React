import { FilterByValue } from './styles'

export default function Filter(){
    return(
        <FilterByValue>
            <h2>Filtrar por valor</h2>
            <div>
                <input type = 'number' placeholder='Mínimo'/>
                <input type = 'number' placeholder='Máximo'/>
                <button>Filtrar</button>
            </div>
        </FilterByValue>
    )
}