import { Menu, Logo } from './styles'

export default function MenuPrincipal(){
    return(
        <Menu>
            <Logo>
                <h2>Loja Virtual</h2>
            </Logo>
            <div>
                <a href = '#'>Olá<br/>Selecione seu endereço</a>
            </div>
            <div>
                <input type = 'text'/>
            </div>
            <div>
                <ul>
                    <li><p>Olá, Faça seu login<br/>Contas e Listas</p></li>
                    <li><p>Devoluções e <br/>Pedidos</p></li>
                    <li><p>Carrinho</p></li>
                </ul>
            </div>
        </Menu>
    )
}