import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextProjectRoutes } from '../RouteContext'
import './styles.scss'

export default function Home(){

    const { rootRoute } = useContext(ContextProjectRoutes)

    const widthHeight = {
        width: document.defaultView.innerWidth,
        height: document.defaultView.innerHeight
    }

    return(
        <div style = {widthHeight} className = 'home'>
            <div className = 'home-container'>
                <h1>Projetos React</h1>
                <nav>
                    <Link to = {`${rootRoute}/VirtualStore`}>Loja Virtual</Link>
                    <Link to = {`${rootRoute}/Covid19`}>Covid-19</Link>
                    <Link to = {`${rootRoute}/ToDoList`}>To Do List</Link>
                </nav>
            </div>
        </div>
    )
}