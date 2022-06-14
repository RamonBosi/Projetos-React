import { createContext } from 'react'

export const ContextProjectRoutes = createContext()

export default function ContextProjectRoutesProvider({ children }){
    
    const route = {
        rootRoute: "/Projetos-React"
    }
    
    return(
        <ContextProjectRoutes.Provider value = {route}>
            {children}
        </ContextProjectRoutes.Provider>
    )
}