import { Content } from './styles'
import Graphic from './Graphic'

export default function BrasilianStatesChart(){
    return(
        <Content>
            <header><h2>Gráfico por Estado brasileiros</h2></header>
            <section>
                <p>Informações referentes a evolução da covid-19 em cada Estado brasileiro</p> 
                <Graphic/>
            </section>
        </Content>
    )
}