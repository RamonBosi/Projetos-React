import { useState } from 'react'
import { Menu, MenuContent } from './styles'

export default function CreateMenu(){
    
    const [showMobileIndex, setShowMobileIndex] = useState(false)

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
                    <div onClick = {() => setShowMobileIndex(!showMobileIndex)}>
                        <span></span>
                        <span className = 'material-icons'>
                            {showMobileIndex ? 'cancel' : 'menu'}
                        </span>
                    </div>
                </div>
                <nav>
                    <a href = ''>O que é Covid-19</a>
                    <a href = ''>Transmissão</a>
                    <a href = ''>Sintomas</a>
                    <a href = ''>Gráficos</a>
                    <a href = ''>Prevenção</a>
                </nav>
                <div className = {showMobileIndex ? 'show' : 'hide'}>
                    <nav>
                        <a href = ''>O que é Covid-19</a>
                        <a href = ''>Transmissão</a>
                        <a href = ''>Sintomas</a>
                        <a href = ''>Gráficos</a>
                        <a href = ''>Prevenção</a>
                    </nav>
                </div>
            </MenuContent>
        </Menu>
    )
}