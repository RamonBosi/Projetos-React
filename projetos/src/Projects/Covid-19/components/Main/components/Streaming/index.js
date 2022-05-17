import { useContext } from 'react'
import { ContextLinks } from '../../../../Contexts/ContextLinks'
import { Container } from './styles'

export default function Streaming(){

    const { streaming } = useContext(ContextLinks)

    return(
        <Container id = {streaming}>
            <div>
                <header><h2>Trasmissão</h2></header>
                <section>
                    <p>
                        As investigações sobre as formas de transmissão do coronavírus ainda estão em andamento, mas a disseminação de pessoa para pessoa, ou seja, a contaminação por gotículas respiratórias ou contato, está ocorrendo.Qualquer pessoa que tenha contato próximo (cerca de 1m) com alguém com sintomas respiratórios está em risco de ser exposta à infecção. É importante observar que a disseminação de pessoa para pessoa pode ocorrer de forma continuada.Alguns vírus são altamente contagiosos (como sarampo), enquanto outros são menos. Ainda não está claro com que facilidade o coronavírus se espalha de pessoa para pessoa.
                    </p>
                </section>
                <aside>
                    <section>
                        <header><h2>Formas de transmissão</h2></header>
                        <div>
                            <p>
                                A transmissão dos coronavírus costuma ocorrer pelo ar ou por contato pessoal com secreções contaminadas, como:    
                            </p>
                            <ul>
                                <li>Gotículas de saliva</li>
                                <li>Espirro</li>
                                <li>Tosse</li>
                                <li>Catarro</li>
                                <li>Contato pessoal próximo, como toque ou aperto de mão</li>
                                <li>Contato com objetos ou superfícies contaminadas, seguido de contato com a boca, nariz ou olhos</li>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <header><h2>Período de incubação</h2></header>
                        <div>
                            <p>
                                O período médio de incubação por coronavírus é de 05 dias, com intervalos que chegam a 12 dias, período em que os primeiros sintomas levam para aparecer desde a infecção.
                            </p>
                        </div>
                    </section>
                    <section>
                        <header><h2>Transmissibilidade</h2></header>
                        <div>
                            <p>
                                A transmissibilidade dos pacientes infectados por SARSCoV é em média de 07 dias após o início dos sintomas. No entanto, dados preliminares do coronavírus (SARS-CoV-2) sugerem que a transmissão possa ocorrer mesmo sem o aparecimento de sinais e sintomas.Até o momento, não há informações suficientes de quantos dias anteriores ao início dos sinais e sintomas uma pessoa infectada passa a transmitir o vírus.
                            </p>
                        </div>
                    </section>
                </aside>
            </div>
        </Container>
    )
}