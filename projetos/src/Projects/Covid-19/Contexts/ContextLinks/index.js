import { createContext } from 'react'

export const ContextLinks = createContext()

export default function ContextLinksProvider({ children }){

    const contextData = {
        whatIsCovid19: 'whatIsCovid19',
        streaming: 'streaming',
        symptoms: 'symptoms',
        evolutionCovid19: 'evolutionCovid19',
        prevention: 'prevention'
    }

    return(
        <ContextLinks.Provider value = {contextData}>
            {children}
        </ContextLinks.Provider>
    )
}