import { Product } from "./styles";

export default function CreateProduct({ value, id }){
    return(
        <Product id = {id}>
            <div>
                <img src = 'https://compaq.vteximg.com.br/arquivos/ids/155450-1200-1200/Compaq_Presario_430_450_Ang_10_MS.jpg?v=637565485061500000'/>
            </div>
            <div>
                <p>Nome do produto</p>
                <p>R$ {value},99</p>
            </div>
        </Product>
    )    
}