import { Footer, Options, FooterContent, Option } from './styles'
import { Mark } from '../Menu/styles'
import Icon from '../Icons'

export default function CreateFooter(){
    return(
        <Footer>
            <FooterContent>
                <Options>
                    <Option>
                        <div>
                            <h2>Conheça-nos</h2>
                            <span className = 'material-icons'>expand_more</span>    
                        </div>
                        <nav>
                            <ul>
                                <li><a href = '#'>Informações corporativas</a></li>
                                <li><a href = '#'>Carreiras</a></li>
                                <li><a href = '#'>Comunicados a imprensa</a></li>
                                <li><a href = '#'>Comunidade</a></li>
                                <li><a href = '#'>Acessibilidade</a></li>
                                <li><a href = '#'>Loja Science</a></li>
                            </ul>
                        </nav>
                    </Option>
                    <Option>
                        <div>
                            <h2>Ganhe dinheiro conosco</h2>
                            <span className = 'material-icons'>expand_more</span>  
                        </div>
                        <nav>
                            <ul>
                                <li><a href = '#'>Publique seus projetos</a></li>
                                <li><a href = '#'>Seja um associado</a></li>
                                <li><a href = '#'>Venda na loja Virtual</a></li>
                                <li><a href = '#'>Anúncie seus produtos</a></li>
                            </ul>
                        </nav>
                    </Option>
                    <Option>
                        <div>
                            <h2>Deixe-nos ajudar voçê</h2>
                            <span className = 'material-icons'>expand_more</span>  
                        </div>
                        <nav>
                            <ul>
                                <li><a href = '#'>Loja e COVID-19</a></li>
                                <li><a href = '#'>Sua conta</a></li>
                                <li><a href = '#'>Frete e prazo de entrega</a></li>
                                <li><a href = '#'>Devoluções e reembolsos</a></li>
                                <li><a href = '#'>Gerencie seu conteúdo e dispositivos</a></li>
                                <li><a href = '#'>Ajuda</a></li>
                            </ul>
                        </nav>
                    </Option>
                    <Option>
                        <div>
                            <h2>Pagamentos</h2>
                            <span className = 'material-icons'>expand_more</span>
                        </div>
                        <nav>
                            <ul>
                                <li><a href = '#'>Cartão de crédito, cartões de debito, Boletos e Pix</a></li>
                            </ul>
                        </nav>
                    </Option>
                </Options>
                <Mark>
                    <h2>Loja Virtual</h2>
                </Mark>
            </FooterContent>
        </Footer>
    )
}