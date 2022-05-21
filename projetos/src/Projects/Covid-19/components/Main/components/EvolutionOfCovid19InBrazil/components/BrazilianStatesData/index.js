import { Content } from './styles'
import Data from './Data'

export default function BrazilianStatesData(){
    return(
        <Content>
            <header><h2>Gráfico por Estado brasileiros</h2></header>
            <section>
                <p>Informações referentes a evolução da covid-19 em cada Estado brasileiro</p> 
                <Data/>
            </section>
        </Content>
    )
}