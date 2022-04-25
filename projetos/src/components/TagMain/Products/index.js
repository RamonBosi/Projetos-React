import { useState } from 'react'
import { Products } from './styles'
import Product from './Product'

export default function CreateProducts(){

    const [loadProducts] = useState(() =>{

        if(!localStorage.getItem('standardProducts')){
            const maximumValue = 500
            const minimumValue = 200
            const quantityOfProducts = 4
            const objproducts = []
    
            for(let n = 1;n <= quantityOfProducts; n++){
                const value = Math.floor(Math.random() * (maximumValue - minimumValue + 1 ) ) + minimumValue
    
                objproducts.push({id: n, value: value})
            }

            const jsonProducts = JSON.stringify(objproducts)
            localStorage.setItem('standardProducts', jsonProducts)
        }

        const products = JSON.parse(localStorage.getItem('standardProducts'))

        const vetorProducts = []
        for(let product in products){
            const json = products[product]
            vetorProducts.push(<Product id = {json.id} value = {json.value}/>)
        }

        return vetorProducts
    })

    return(
        <Products>
            {loadProducts}
        </Products>
    )
}