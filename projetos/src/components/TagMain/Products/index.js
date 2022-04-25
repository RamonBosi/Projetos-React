import { useState } from 'react'
import { Products } from './styles'
import Product from './Product'

export default function CreateProducts(){

    const [loadProducts] = useState(() =>{

        const standardProductKey = 'standardProducts'
        
        if(!localStorage.getItem(standardProductKey)){
            const maximumValue = 500
            const minimumValue = 200
            const quantityOfProducts = 4
            const objProducts = []
    
            for(let n = 1;n <= quantityOfProducts; n++){
                const value = Math.floor(Math.random() * (maximumValue - minimumValue + 1 ) ) + minimumValue
    
                objProducts.push({id: `product${n}`, value: value})
            }

            localStorage.setItem(standardProductKey, JSON.stringify(objProducts))
        }

        const products = JSON.parse(localStorage.getItem(standardProductKey))

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