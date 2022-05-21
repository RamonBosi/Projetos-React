import { useContext, useEffect, useState } from "react"
import { ContextAPI } from '../../../../../../../Contexts/API'
import { Content, DataContent } from "./styles"

export default function Data(){

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
            <DataContent>
                <h2>Estado selecionado</h2>
                <div>
                    <div>
                        <p>Casos: <span>100</span></p>
                    </div>
                    <div>
                        <p>Suspeitos: <span>100</span></p>
                    </div>
                    <div>
                        <p>Mortes: <span>100</span></p>
                    </div>
                </div>
            </DataContent>
        </Content>
    )
}