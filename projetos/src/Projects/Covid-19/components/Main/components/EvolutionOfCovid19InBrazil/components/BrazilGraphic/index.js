import { Content } from './styles'
import Graphic from './Graphic'

export default function BrazilGraphic(){
    return(
        <Content>
            <header><h2>Gráfico do Brasil</h2></header>
            <section>
                <p>
                    Gráfico geográfico do Brasil mostrando como está a evolução da covid-19
                </p>
                <p><strong>Obs: selecione um Estado para ver sua situação</strong></p>
                <Graphic/>
            </section>
        </Content>
    )
}