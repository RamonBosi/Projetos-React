import { Menu, Mark, Search, Address, AccountInformation } from './styles'
import IconSearch from '../Icons/Search'

export default function MainMenu(){
    return(
        <Menu>
            <Mark>
                <h2>Loja Virtual</h2>
            </Mark>
            <Address href = '#'>
                <p>Olá</p>
                <p>Selecione seu endereço</p>
            </Address>
            <Search>
                <div></div>
                <input type = 'text' placeholder = 'Pesquisar produtos'/>
                <div><IconSearch/></div>
            </Search>
            <AccountInformation>
                <a href = '#'>Olá, Faça seu login<br/>Contas e Listas</a>
                <a  href = '#'>Devoluções e <br/>Pedidos</a>
                <a  href = '#'>Carrinho</a>
            </AccountInformation>
        </Menu>
    )
}