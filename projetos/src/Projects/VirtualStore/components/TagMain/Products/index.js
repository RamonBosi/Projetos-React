import { useEffect, useState } from 'react'
import { Products } from './styles'
import Product from './Product'

export default function CreateProducts(){

    const [loadProducts, setLoadProducts] = useState(<></>)

    useEffect(()=>{
        const standardProductKey = 'standardProducts'
        
        if(!localStorage.getItem(standardProductKey)){
            const maximumValue = 500
            const minimumValue = 200
            const quantityOfProducts = 20
            const productImages = [
                'https://compaq.vteximg.com.br/arquivos/ids/155450-1200-1200/Compaq_Presario_430_450_Ang_10_MS.jpg?v=637565485061500000',
                'https://m.media-amazon.com/images/I/41I-GQBlYyL._SL500_.jpg',
                'https://images.kabum.com.br/produtos/fotos/156345/notebook-gamer-lenovo-ideapad-gaming-3i-intel-core-i7-10750h-nvidia-geforce-gtx-1650-4gb-8gb-512gb-ssd-15-6-win10-h-azul-82cg0005br_1619712650_gg.jpg'
            ]
            const objProducts = []

            for(let n = 1;n <= quantityOfProducts; n++){

                const value = Math.floor(Math.random() * (maximumValue - minimumValue + 1 ) ) + minimumValue

                const image = (Math.floor(Math.random() * (3 - 1 + 1 ) ) + 1) - 1

                objProducts.push({
                    id: `product${n}`, 
                    value: value, 
                    src: productImages[image]
                })
            }

            localStorage.setItem(standardProductKey, JSON.stringify(objProducts))
        }

        const products = JSON.parse(localStorage.getItem(standardProductKey))

        const vetorProducts = []
        for(let product in products){

            const {id,value,src} = products[product]

            vetorProducts.push(
                <Product id = {id} value = {value} src = {src}/>
            )

        }

        setLoadProducts(vetorProducts)
    },[])

    return(
        <Products>
            {loadProducts}
        </Products>
    )
}