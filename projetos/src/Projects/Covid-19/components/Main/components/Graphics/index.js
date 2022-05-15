import { Content } from './styles'
import BrazilGraphic from './components/BrazilGraphic'
import BrasilianStatesChart from './components/BrazilianStatesChart'

export default function Graphics(){
    return(
        <Content>
            <div>
                <BrazilGraphic/>
                <BrasilianStatesChart/>
            </div>
        </Content>
    )
}