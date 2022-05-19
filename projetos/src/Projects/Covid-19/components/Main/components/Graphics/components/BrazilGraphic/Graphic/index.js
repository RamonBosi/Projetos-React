import { useEffect, useState } from 'react'
import { Content } from "./styles"
import { Chart } from 'react-google-charts'
import axios from 'axios'

export default function Graphic(){

    const [data, setData] = useState(null)
    const [chartTitle, setChartTitle] = useState(null)

    useEffect(()=>{ loadChart('cases', 'Casos') },[])
 
    const stylesChart = {
        width: '99%',
        height: '90%',
        margin: 'auto'
    }

    const chartColors = () =>{

        const { cases, suspects, deaths } = {
            cases: ['rgb(86, 150, 214)', 'rgb(4, 53, 189)'],
            suspects: ['rgb(232, 227, 74)','rgb(252, 240, 3)'],
            deaths: ['rgb(222, 137, 131)','rgb(250, 21, 5)']
        }

        if(chartTitle === 'Casos'){
            return cases
        }else if(chartTitle === 'Suspeitos'){
            return suspects
        }else{
            return deaths
        }
    }

    const options = {
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
            colors: chartColors()
        }
    }

    const loadChart = (type,title) =>{

        setChartTitle(title)

        const API = axios.create({
            baseURL: 'https://covid19-brazil-api.now.sh/api/report/v1'
        })

        API.get()
        .then((JSON) => {
            const chartData = (JSON.data.data).map(
                (value) => [value.state, value[type]]
            )

            setData([
                ['Estado', title],
                ...chartData
            ])
        })
        .catch(() => console.log('Algo deu errado!'))
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