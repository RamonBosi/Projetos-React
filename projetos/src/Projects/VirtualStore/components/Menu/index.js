import { Menu, MenuContent, Mark, Search, Address, AccountInformation } from './styles'

export default function MainMenu(){
    return(
        <Menu>
            <MenuContent>
                <span className = 'material-icons'>menu</span>
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
                    <div>
                        <span className = 'material-icons'>search</span>
                    </div>
                </Search>
                <AccountInformation>
                    <a href = '#'>Login</a>
                    <a  href = '#'>Devoluções e <br/>Pedidos</a>
                    <a  href = '#'>
                        <span className = 'material-icons'>shopping_cart</span>
                    </a>
                </AccountInformation>
            </MenuContent>
        </Menu>
    )
}