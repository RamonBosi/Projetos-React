import { useState, useContext } from 'react'
import { Menu, MenuContent } from './styles'
import { ContextLinks } from '../../Contexts/ContextLinks'

export default function CreateMenu(){
    
    const [showLinksMobile, setShowLinksMobile] = useState(false)

    const {
        whatIsCovid19, 
        streaming,
        symptoms,
        graphics,
        prevention
    } = useContext(ContextLinks)

    return (
        <Menu>
            <MenuContent>
                <div>
                    <span>
                        <h2>Covid-19</h2>
                        <div>
                            <span></span>
                            <span className = 'material-icons'>coronavirus</span>
                        </div>
                    </span>
                    <div onClick = {() => setShowLinksMobile(!showLinksMobile)}>
                        <span></span>
                        <span className = 'material-icons'>
                            {showLinksMobile ? 'cancel' : 'menu'}
                        </span>
                    </div>
                </div>
                <nav>
                    <a href = {`#${whatIsCovid19}`}>O que é Covid-19</a>
                    <a href = {`#${streaming}`}>Transmissão</a>
                    <a href = {`#${symptoms}`}>Sintomas</a>
                    <a href = {`#${graphics}`}>Gráficos</a>
                    <a href = {`#${prevention}`}>Prevenção</a>
                </nav>
                <div className = {showLinksMobile ? 'show' : 'hide'}>
                    <nav>
                        <a 
                        href = {`#${whatIsCovid19}`} 
                        onClick = {() => setShowLinksMobile(!showLinksMobile)}>O que é Covid-19
                        </a>
                        <a 
                        href = {`#${streaming}`} 
                        onClick = {() => setShowLinksMobile(!showLinksMobile)}>Transmissão</a>
                        <a 
                        href = {`#${symptoms}`} 
                        onClick = {() => setShowLinksMobile(!showLinksMobile)}>Sintomas</a>
                        <a 
                        href = {`#${graphics}`} 
                        onClick = {() => setShowLinksMobile(!showLinksMobile)}>Gráficos</a>
                        <a 
                        href = {`#${prevention}`} 
                        onClick = {() => setShowLinksMobile(!showLinksMobile)}>Prevenção</a>
                    </nav>
                </div>
            </MenuContent>
        </Menu>
    )
}