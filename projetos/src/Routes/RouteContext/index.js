import { createContext } from 'react'

export const ContextProjectRoutes = createContext()

export default function ContextProjectRoutesProvider({ children }){

    const routeDevelopment = "/Projetos-React"
    const routeProduction = "https://ramonbosi.github.io/Projetos-React"
    
    const route = {
        rootRoute: routeDevelopment
    }
    
    return(
        <ContextProjectRoutes.Provider value = {route}>
            {children}
        </ContextProjectRoutes.Provider>
    )
}