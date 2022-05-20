import { useContext, useEffect, useState } from "react"
import { ContextAPI } from '../../../../../../../Contexts/API'
import { Content } from "./styles"

export default function Graphic(){

    const { API } = useContext(ContextAPI)

    const [selectionOptions, setSelectionOptions] = useState(null)

    useEffect(()=>{

        API.get()
        .then((states) =>{

            const createOptions = states.data.data.map((state) => state.state).sort().map((option) => <option>{option}</option>)

            setSelectionOptions(createOptions)
        })
        .catch(() => console.log('Algo deu errado'))
    },[])
    
    return(
        <Content>
            <div>
                <span className = 'material-icons'>expand_more</span>
                <select>
                    {selectionOptions}
                </select>
            </div>
            <div>
                <h2>Estado selecionado</h2>
                <div>
                    <span>
                        <p>Casos:</p>
                        <p>100</p>
                    </span>
                    <span>
                        <p>Suspeitos: </p>
                        <p>200</p>
                    </span>
                    <span>
                        <p>Mortes: </p>
                        <p>300</p>
                    </span>
                </div>
            </div>
        </Content>
    )
}