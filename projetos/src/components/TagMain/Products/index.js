import { useState } from 'react'
import { Products } from './styles'
import Product from './Product'

export default function CreateProducts(){

    const [p, setProducts] = useState([])

    const objProducts = () =>{
        for(let n = 1; n <= 4; n++){
            setProducts(...p, n)
        }
    }

    return(
        <Products>
            <button onClick = {() => console.log(p)}>Mostrar</button>
        </Products>
    )
}