import { useContext } from 'react'
import { ContextLinks } from '../../../../Contexts/ContextLinks'
import ContextAPIProvider from '../../../../Contexts/API'
import { Content } from './styles'
// import BrazilGraphic from './components/BrazilGraphic'
import BrazilianStatesData from './components/BrazilianStatesData'

export default function EvolutionOfCovid19InBrazil(){

    const { graphics } = useContext(ContextLinks)

    return(
        <Content id = {graphics}>
            <div>
                <ContextAPIProvider>
                    {/* <BrazilGraphic/> */}
                    <BrazilianStatesData/>
                </ContextAPIProvider>
            </div>
        </Content>
    )
}