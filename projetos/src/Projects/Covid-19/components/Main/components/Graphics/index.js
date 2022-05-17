import { useContext } from 'react'
import { ContextLinks } from '../../../../Contexts/ContextLinks'
import { Content } from './styles'
import BrazilGraphic from './components/BrazilGraphic'
import BrasilianStatesChart from './components/BrazilianStatesChart'

export default function Graphics(){

    const { graphics } = useContext(ContextLinks)

    return(
        <Content id = {graphics}>
            <div>
                <BrazilGraphic/>
                <BrasilianStatesChart/>
            </div>
        </Content>
    )
}