import { Menu, MenuContent, Mark, Search, Address, AccountInformation } from './styles'
import Icon from '../Icons'

export default function MainMenu(){
    return(
        <Menu>
            <MenuContent>
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
                    <div><Icon>search</Icon></div>
                </Search>
                <AccountInformation>
                    <a href = '#'>Olá, Faça seu login<br/>Contas e Listas</a>
                    <a  href = '#'>Devoluções e <br/>Pedidos</a>
                    <a  href = '#'><Icon>shopping_cart</Icon></a>
                </AccountInformation>
            </MenuContent>
        </Menu>
    )
}