import { useRef, useState } from 'react'
import { FilterByValue } from './styles'

export default function CreateFilter(){

    const inputMin = useRef()
    const inputMax = useRef()

    const [filteredProducts, setFilteredProducts] = useState(null)

    const showProducts = () =>{

        const jsonProducts = JSON.parse(localStorage.getItem('standardProducts'))

        jsonProducts.map((product) => {
            const idProduct = product.id
            document.querySelector(`#${idProduct}`).removeAttribute('style')
        })
    }

    const filter = (min, max) =>{

        const filterProducts = (products) => {
                
            const filteredProducts2 = products.filter((product) => {

                const idProduct = String(product.id)
                const valueProduct = Number(product.value)

                if(min !== 0 && max !== 0){

                    if(valueProduct >= min && valueProduct <= max){
                        return product
                    }else{
                        document.querySelector(`#${idProduct}`).style.display = 'none'
                    }

                }else if(min !== 0){

                    if(valueProduct >= min){
                        return product
                    }else{
                        document.querySelector(`#${idProduct}`).style.display = 'none'
                    }

                }else if(max !== 0){

                    if(valueProduct <= max){
                        return product
                    }else{
                        document.querySelector(`#${idProduct}`).style.display = 'none'
                    }

                }

            })
            setFilteredProducts(filteredProducts2)

        }

        if(min <= max || max === 0){

            if(filteredProducts === null){

                const jsonProducts = JSON.parse(localStorage.getItem('standardProducts'))
                showProducts()
                filterProducts(jsonProducts)

            }else{
                filterProducts(filteredProducts)
            }
    
        }else{
            alert('Valor mínimo é maior que o valor máximo. Mude o valor')
        }
    }

    return(
        <FilterByValue>
            <h2>Filtrar por valor</h2>
            <div>
                <input ref = {inputMin} type = 'number' placeholder='Mínimo'/>
                <input ref = {inputMax} type = 'number' placeholder='Máximo'/>
                <button onClick = {() => filter(
                    Number(inputMin.current.value), Number(inputMax.current.value))}>Filtrar</button>
                    <button onClick = {() => showProducts()}>Resetar</button>
            </div>
        </FilterByValue>
    )
}