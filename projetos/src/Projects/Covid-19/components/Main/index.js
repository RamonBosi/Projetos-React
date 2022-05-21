import { MainContext } from './styles'
// import WhatIsCovid19 from './components/WhatIsCovid19'
// import Streaming from './components/Streaming'
// import Symptoms from './components/Symptoms'
// import Prevention from './components/Prevention'
import EvolutionOfCovid19InBrazil from './components/EvolutionOfCovid19InBrazil'

export default function CreateMain(){
    return(
       <main>
           <MainContext>
                <h1>Covid-19 no Brasil</h1>
                {/* <WhatIsCovid19/>
                <Streaming/>
                <Symptoms/> */}
                <EvolutionOfCovid19InBrazil/>
                {/* <Prevention/> */}
           </MainContext>
       </main>
    )
}