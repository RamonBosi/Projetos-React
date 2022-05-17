import { useContext } from "react";
import { ContextLinks } from "../../../../Contexts/ContextLinks";
import Mold from "../Mold";

export default function WhatIsCovid19(){

    const { whatIsCovid19 } = useContext(ContextLinks)

    return <Mold 
            id = {whatIsCovid19}
            mainTitle={'O que é Covid-19'}
            content = {
                <p>
                    A doença provocada pelo novo Coronavírus é oficialmente conhecida como COVID-19,sigla em inglês para “coronavirus disease 2019” (doença por coronavírus 2019, em tradução livre).Vírus que causa doença respiratória pelo agente coronavírus, com casos inicialmente registrados na China e hoje espalhados por todo o mundo.Quadro pode variar de leve a moderado, semelhante a uma gripe.Alguns casos podem ser mais graves, por exemplo, em pessoas que já possuem outras doençasNessas situações, pode ocorrer síndrome respiratória aguda grave e complicações. Em casos extremos, pode levar a óbito.
                </p>
            }
        />
}