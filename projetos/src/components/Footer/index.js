import { Footer, Options, FooterContent, Option } from './styles'
import { Mark } from '../Menu/styles'
import { useRef } from 'react'

export default function CreateFooter(){

    const optionsRef = {
        conhecanos: useRef(),
        ganheDinheiroConosco: useRef(),
        deixeNosAjudarVoce: useRef(),
        pagamentos: useRef()
    }

    const {conhecanos, ganheDinheiroConosco, deixeNosAjudarVoce, pagamentos} = optionsRef

    const showHide = (optionSelected) =>{
        
        const selectedOptionClass = optionSelected.current.classList
        const showHideClass = 'showHide'
        const addShowHideClass = () => {

            const options = [
                conhecanos, ganheDinheiroConosco, deixeNosAjudarVoce, pagamentos
            ]

            options.map((option) => {
                const classOption = option.current.classList
                classOption.add(showHideClass)
            })
        }

        if(selectedOptionClass.contains(showHideClass)){
            addShowHideClass()
            selectedOptionClass.toggle(showHideClass)
        }else{
            selectedOptionClass.toggle(showHideClass)
        }
    }

    return(
        <Footer>
            <FooterContent>
                <Options>
                    <Option>
                        <div>
                            <h2>Conheça-nos</h2>
                            <span 
                            onClick = {() => showHide(conhecanos)}
                            className = 'material-icons'>expand_more</span>    
                        </div>
                        <nav ref = {conhecanos} className = 'showHide'>
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
                            <span 
                            onClick = {() => showHide(ganheDinheiroConosco)}
                            className = 'material-icons'>expand_more</span>  
                        </div>
                        <nav ref = {ganheDinheiroConosco} className = 'showHide'>
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
                            <span 
                            onClick = {() => showHide(deixeNosAjudarVoce)}
                            className = 'material-icons'>expand_more</span>  
                        </div>
                        <nav ref = {deixeNosAjudarVoce} className = 'showHide'>
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
                            <span 
                            onClick = {() => showHide(pagamentos)}
                            className = 'material-icons'>expand_more</span>
                        </div>
                        <nav ref = {pagamentos} className = 'showHide'>
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