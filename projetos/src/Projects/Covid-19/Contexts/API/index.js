import { createContext } from "react";
import axios from "axios";

export const ContextAPI = createContext()

export default function ContextAPIProvider({ children }){

    const graphicsAPI = {
        API: axios.create({
            baseURL: 'https://covid19-brazil-api.now.sh/api/report/v1'
        })
    }

    return(
        <ContextAPI.Provider value = {graphicsAPI}>
            {children}
        </ContextAPI.Provider>
    )
}