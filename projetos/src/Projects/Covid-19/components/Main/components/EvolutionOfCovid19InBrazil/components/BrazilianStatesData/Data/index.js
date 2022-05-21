import { useContext, useEffect, useState } from "react"
import { ContextAPI } from '../../../../../../../Contexts/API'
import { Content, DataContent } from "./styles"

export default function Data(){

    const { API } = useContext(ContextAPI)

    const [selectionOptions, setSelectionOptions] = useState(null)
    const [{ state, cases, suspects, deaths }, setStateData] = useState({
        state: null,
        cases: null,
        suspects: null,
        deaths: null
    })

    useEffect(()=>{

        loadData()

        API.get()
        .then((states) =>{

            const createOptions = states.data.data.map((state) => state.state).sort().map((option) => <option>{option}</option>)

            setSelectionOptions(createOptions)
        })
        .catch(() => console.log('Algo deu errado'))
    },[])
    
    const loadData = (selectedState = 'Acre') =>{
        API.get()
        .then((states) =>{
            
            const stateData = () =>{ 
                if(selectedState === 'Acre'){
                    return states.data.data.filter(
                        (state) => state.state === 'Acre'
                    )
                }else{
                    return states.data.data.filter(
                        (state) => state.state === selectedState.target.value
                    )
                }
            }
            
            setStateData(...stateData())
        })
        .catch(() => console.log('Algo deu errado'))
    }

    return(
        <Content>
            <div>
                <span className = 'material-icons'>expand_more</span>
                <select onChange = {(selectedState) => loadData(selectedState)}>
                    {selectionOptions}
                </select>
            </div>
            <DataContent>
                <h2>{state}</h2>
                <div>
                    <div>
                        <p>Casos: <span>{cases}</span></p>
                    </div>
                    <div>
                        <p>Suspeitos: <span>{suspects}</span></p>
                    </div>
                    <div>
                        <p>Mortes: <span>{deaths}</span></p>
                    </div>
                </div>
            </DataContent>
        </Content>
    )
}