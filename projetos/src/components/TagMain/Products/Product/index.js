import { Product } from "./styles";

export default function CreateProduct({ value, id }){
    return(
        <Product id = {id}>
            <div><p>Imagem do produto</p></div>
            <div>
                <p>Nome do produto</p>
                <p>R$ {value}</p>
            </div>
        </Product>
    )    
}