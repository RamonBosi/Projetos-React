import { useRef } from 'react'
import { FilterByValue } from './styles'

export default function CreateFilter(){

    const { valueMin, valueMax } = {
        valueMin: useRef(),
        valueMax: useRef()
    }

    const showProducts = () =>{

        const jsonProducts = JSON.parse(localStorage.getItem('standardProducts'))

        jsonProducts.map((product) => {
            const idProduct = product.id
            document.querySelector(`#${idProduct}`).removeAttribute('style')
        })
    }

    const filter = (min, max) =>{

        if(min <= max || max === 0){

            showProducts()
            const jsonProducts = JSON.parse(localStorage.getItem('standardProducts'))

            jsonProducts.map((product) => {

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

        }else{
            alert('Valor mínimo é maior que o valor máximo. Mude o valor')
        }
    }

    return(
        <FilterByValue>
            <div>
                <span 
                className = 'material-icons' 
                title='Resetar filtro'
                onClick = {() => showProducts()}>filter_alt_off</span>
                <h2>Filtrar por valor</h2>
            </div>
            <div>
                <input ref = {valueMin} type = 'number' placeholder='Mínimo'/>
                <input ref = {valueMax} type = 'number' placeholder='Máximo'/>
                <button onClick = {() => filter(
                    Number(valueMin.current.value), Number(valueMax.current.value))}>Filtrar</button>
            </div>
        </FilterByValue>
    )
}