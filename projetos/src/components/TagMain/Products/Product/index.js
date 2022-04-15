import { Product } from "./styles";

export default function CreateProduct(){
    return(
        <Product>
            <div><p>Imagem do produto</p></div>
            <div>
                <p>Nome do produto</p>
                <p>R$50,00</p>
            </div>
        </Product>
    )    
}