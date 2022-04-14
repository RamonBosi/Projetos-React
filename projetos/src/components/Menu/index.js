import { Menu, Logo, Pesquisar, InformacaoDaConta } from './styles'

export default function MenuPrincipal(){
    return(
        <Menu>
            <Logo>
                <h2>Loja Virtual</h2>
            </Logo>
            <div>
                <a href = '#'>Olá<br/>Selecione seu endereço</a>
            </div>
            <Pesquisar>
                <div></div>
                <input type = 'text'/>
                <div></div>
            </Pesquisar>
            <InformacaoDaConta>
                <li><a href = '#'>Olá, Faça seu login<br/>Contas e Listas</a></li>
                <li><a  href = '#'>Devoluções e <br/>Pedidos</a></li>
                <li><a  href = '#'>Carrinho</a></li>
            </InformacaoDaConta>
        </Menu>
    )
}