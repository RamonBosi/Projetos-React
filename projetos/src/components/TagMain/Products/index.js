import { useState } from 'react'
import { Products } from './styles'
import Product from './Product'

export default function CreateProducts(){

    const [p, setProducts] = useState([])

    const objProducts = () =>{
        for(let n = 1; n <= 4; n++){
            setProducts(p.push(n))
        }
        console.log(p)
    }

    return(
        <Products>
            <button onClick = {() => objProducts()}>Mostrar</button>
        </Products>
    )
}