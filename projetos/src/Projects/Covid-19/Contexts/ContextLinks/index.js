import { createContext } from 'react'

export const ContextLinks = createContext()

export default function ContextLinksProvider({ children }){

    const contextData = {
        whatIsCovid19: 'whatIsCovid19',
        streaming: 'streaming',
        symptoms: 'symptoms',
        graphics: 'graphics',
        prevention: 'prevention',
        goToTheLink(id){

            const linkPosition = document.querySelector(`#${id}`).getBoundingClientRect()
            const compensate = 2
            const a = linkPosition.y - 150

            console.log(a)
            window.scrollTo(0, 282)
        }
    }

    return(
        <ContextLinks.Provider value = {contextData}>
            {children}
        </ContextLinks.Provider>
    )
}