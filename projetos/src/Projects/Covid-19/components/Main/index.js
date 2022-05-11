import { MainContext } from './styles'
import WhatIsCovid19 from './components/WhatIsCovid19'
import Streaming from './components/Streaming'

export default function CreateMain(){
    return(
       <main>
           <MainContext>
                <h1>Covid-19 no Brasil</h1>
                <WhatIsCovid19/>
                <Streaming/>
           </MainContext>
       </main>
    )
}