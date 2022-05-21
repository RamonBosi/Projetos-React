import { Content } from './styles'
import Data from './Data'

export default function BrazilianStatesData(){
    return(
        <Content>
            <header><h2>Dados da Covid-19 por Estado brasileiro</h2></header>
            <section>
                <p>Informações referentes a evolução da covid-19 em cada Estado brasileiro</p> 
                <p><strong>Obs: Aguarde alguns segundos para os dados serem atualizados</strong></p> 
                <Data/>
            </section>
        </Content>
    )
}