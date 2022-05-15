import { Menu, MenuContent } from './styles'

export default function CreateMenu(){
    return (
        <Menu>
            <MenuContent>
                <div>
                    <span>
                        <h2>Covid-19</h2>
                        <div>
                            <span></span>
                            <span className = 'material-icons'>coronavirus</span>
                        </div>
                    </span>
                    <div>
                        <span></span>
                        <span className = 'material-icons'>menu</span>
                    </div>
                </div>
                <nav>
                    <a href = ''>O que é Covid-19</a>
                    <a href = ''>Transmissão</a>
                    <a href = ''>Sintomas</a>
                    <a href = ''>Gráficos</a>
                    <a href = ''>Prevenção</a>
                </nav>
                <div>
                    <nav>
                        <a href = ''>O que é Covid-19</a>
                        <a href = ''>Transmissão</a>
                        <a href = ''>Sintomas</a>
                        <a href = ''>Gráficos</a>
                        <a href = ''>Prevenção</a>
                    </nav>
                </div>
            </MenuContent>
        </Menu>
    )
}