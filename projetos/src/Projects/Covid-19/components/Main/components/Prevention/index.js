import { useContext } from 'react'
import { ContextLinks } from '../../../../Contexts/ContextLinks'
import Mold from '../Mold'

export default function Prevention(){

    const { prevention } = useContext(ContextLinks)

    return(
        <Mold
            id = {prevention}
            mainTitle={'Prevenção'}
            content = {
                <>
                    <p>
                        Até o momento não há um tratamento específico para a doença, que é transmitida por gotículas de saliva e catarro que se espalham pelo ambiente.
                        Por isso, é fundamental manter alguns cuidados com a higiene pessoal que também valem para afastar o risco de gripe e outras tantas doenças respiratórias.
                    </p>
                    <ol>
                        <li>Lavar as mãos frequentemente por pelo menos 20 segundos com água e sabão</li>
                        <li>Utilizar antisséptico de mãos à base de álcool para higienização</li>
                        <li>Cobrir com a parte interna do cotovelo a boca e o nariz ao tossir ou espirrar</li>
                        <li>Utilizar lenço descartável para higiene nasal</li>
                        <li>Evitar tocar mucosas de olhos, nariz e boca</li>
                        <li>Não compartilhar objetos de uso pessoal</li>
                        <li>Limpar regularmente o ambiente e mantê-lo ventilado</li>
                    </ol>
                </>
            }
        />
    )
}