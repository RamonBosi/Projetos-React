import { Product } from "./styles";

export default function CreateProduct({ value, id, src }){
    return(
        <Product id = {id}>
            <div>
                <img 
                src = {src} 
                alt = {`imagem do notebook da marca X de uma cor Y`}/>
            </div>
            <div>
                <p>Nome do produto</p>
                <p>R$ {value},00</p>
            </div>
        </Product>
    )    
}