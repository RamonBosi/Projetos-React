import { Menu, Logo, Pesquisar, Endereco, InformacaoDaConta } from './styles'

export default function MenuPrincipal(){
    return(
        <Menu>
            <Logo>
                <h2>Loja Virtual</h2>
            </Logo>
            <Endereco href = '#'>
                <p>Olá</p>
                <p>Selecione seu endereço</p>
            </Endereco>
            <Pesquisar>
                <div></div>
                <input type = 'text' placeholder = 'Pesquisar produtos'/>
                <div></div>
            </Pesquisar>
            <InformacaoDaConta>
                <a href = '#'>Olá, Faça seu login<br/>Contas e Listas</a>
                <a  href = '#'>Devoluções e <br/>Pedidos</a>
                <a  href = '#'>Carrinho</a>
            </InformacaoDaConta>
        </Menu>
    )
}