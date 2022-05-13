import { Content } from './styles'
// import Graphic from './Graphic'

export default function BrasilianStatesChart(){
    return(
        <Content>
            <header><h2>Gráfico por Estado brasileiros</h2></header>
            <section>
                <p>Informações referentes a evolução da covid-19 em cada Estado brasileiro</p>
                <div>
                    <select>
                        <option>São Paulo</option>
                        <option>Rio de Janeiro</option>
                        <option>Espírito Santo</option>
                    </select>
                </div>
            </section>
            {/* <Graphic/> */}
        </Content>
    )
}