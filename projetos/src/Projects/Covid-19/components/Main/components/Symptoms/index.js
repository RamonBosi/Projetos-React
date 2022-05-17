import { useContext } from 'react'
import { ContextLinks } from '../../../../Contexts/ContextLinks'
import Mold  from '../Mold'

export default function Symptoms(){
    
    const { symptoms } = useContext(ContextLinks)

    return(
        <Mold
            id = {symptoms}
            mainTitle={'Sintomas'}
            content = {
                <>
                    <p>
                        Os sinais e sintomas do coronavírus são principalmente respiratórios, semelhantes a um resfriado.Podem, também, causar infecção do trato respiratório inferior, como as pneumonias. No entanto, o coronavírus (SARS-CoV-2) ainda precisa de mais estudos e investigações para caracterizar melhor os sinais e sintomas da doença.Os principais sintomas conhecidos até o momento são:
                    </p>
                    <ul>
                        <li>Febre</li>
                        <li>Tosse</li>
                        <li>Dificuldade para respirar</li>
                    </ul>
                    <p>
                        Se apresentar esses sintomas, procure o seu serviço de saúde de referência. Após o exame pelo profissional de saúde, se for constatado quadro leve, o paciente deve receber o atestado médico e permanecer em casa por 14 dias.

                        Os endereços das unidades de saúde estão disponíveis nos sites das prefeituras. O atendimento nos hospitais é de média e alta complexidade. Só são encaminhados aos hospitais pacientes com quadros mais graves.

                        Se tiver dúvidas, ligue a para o 136. Esse é o número do atendimento telefônico gratuito do Sistema Único de Saúde (SUS) e fornece informações e orientações de saúde ao cidadão.
                    </p>
                </>
            }
        />
    )
}