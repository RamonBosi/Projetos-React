import { useEffect, useState, useContext, useMemo } from 'react'
import { ContextAPI } from '../../../../../../../Contexts/API'
import { Content } from "./styles"
import { Chart } from 'react-google-charts'

export default function Graphic(){

    const { API } = useContext(ContextAPI)

    const [data, setData] = useState(null)
    const [chartTitle, setChartTitle] = useState(null)

    useEffect(()=>{ loadChart('cases', 'Casos') },[])

    const loadChart = (situation,title) =>{
        
        setChartTitle(title)

        API.get()
        .then((states) => {
            const chartData = (states.data.data).map(
                (state) => [state.state, state[situation]]
            )

            setData([
                ['Estado', title],
                ...chartData
            ])
        })
        .catch(() => console.log('Algo deu errado!'))
    }

    const chartColors = useMemo(() =>{

        const { cases, suspects, deaths } = {
            cases: ['rgb(86, 150, 214)', 'rgb(4, 53, 189)'],
            suspects: ['rgb(201, 173, 107)','rgb(222, 169, 47)'],
            deaths: ['rgb(222, 137, 131)','rgb(250, 21, 5)']
        }

        if(chartTitle === 'Casos'){
            return cases
        }else if(chartTitle === 'Suspeitos'){
            return suspects
        }else{
            return deaths
        }
    },[chartTitle])

    const { stylesChart, options } = {
        stylesChart: {
            width: '99%',
            height: '90%',
            margin: 'auto'
        },
        options: {
            region: 'BR',
            resolution: 'provinces',
            backgroundColor: 'rgb(104, 148, 171)',
            datalessRegionColor:'rgb(195, 208, 214)',
            tooltip:{
                textStyle: {
                    color: 'rgb(0,0,0)',
                    fontSize: 20
                }
            },
            colorAxis: {
                colors: chartColors
            }
        }
    }

    return(
        <Content>
            <div>
                <button onClick={() => loadChart('cases', 'Casos')}>Casos</button>
                <button onClick={() => loadChart('suspects','Suspeitos')}>Suspeitos</button>
                <button onClick={() => loadChart('deaths', 'Mortes')}>Mortes</button>
            </div>
            <div>
                <h2>{chartTitle} da Covid-19</h2>
            </div>
            <Chart
                chartType = "GeoChart"
                data = {data}
                style = {stylesChart}
                options = {options}
            />
        </Content>
    )
}