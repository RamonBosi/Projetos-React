import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ContextProjectRoutes } from "../../RouteContext"
import './styles.scss'

export default function BackHomePage(){

    const { rootRoute } = useContext(ContextProjectRoutes)

    const goToPage = useNavigate()

    return(
        <div 
            className = 'back-home-page' 
            onClick = {() => goToPage(rootRoute)} 
            title = 'Voltar para página inicial'
        >
            <span></span>
            <span className = 'material-icons'>home</span>
        </div>
    )
}