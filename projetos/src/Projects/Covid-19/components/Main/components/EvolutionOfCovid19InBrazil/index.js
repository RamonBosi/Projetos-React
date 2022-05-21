import { useContext } from 'react'
import { ContextLinks } from '../../../../Contexts/ContextLinks'
import ContextAPIProvider from '../../../../Contexts/API'
import { Content } from './styles'
import BrazilGraphic from './components/BrazilGraphic'
import BrazilianStatesData from './components/BrazilianStatesData'

export default function EvolutionOfCovid19InBrazil(){

    const { evolutionCovid19 } = useContext(ContextLinks)

    return(
        <Content id = {evolutionCovid19}>
            <div>
                <ContextAPIProvider>
                    <BrazilGraphic/>
                    <BrazilianStatesData/>
                </ContextAPIProvider>
            </div>
        </Content>
    )
}