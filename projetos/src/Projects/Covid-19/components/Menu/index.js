import { Menu, MenuContent } from './styles'

export default function CreateMenu(){
    return (
        <Menu>
            <MenuContent>
                <div>
                    <h2>Covid-19</h2>
                    <span className = 'material-icons'>coronavirus</span>
                </div>
                <nav>
                    <a href = ''>O que é Covid-19</a>
                    <a href = ''>Transmissão</a>
                    <a href = ''>Sintomas</a>
                    <a href = ''>Gráficos</a>
                    <a href = ''>Prevenção</a>
                </nav>
            </MenuContent>
        </Menu>
    )
}