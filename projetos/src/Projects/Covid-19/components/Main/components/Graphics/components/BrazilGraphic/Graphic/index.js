import { Content } from "./styles";
import { Chart } from 'react-google-charts'

export default function Graphic(){

    const data = [
        ['Empresa', 'Fatura', 'Despesas'],
        ['A', 100, 200],
        ['B', 300, 500],
        ['C', 600, 200],
        ['C', 600, 200],
        ['C', 600, 200],
        ['C', 600, 200],
        ['C', 600, 200],
        ['C', 600, 200],
        ['C', 600, 200],
        ['C', 600, 200],
        ['C', 600, 200],
        ['C', 600, 200]
    ]

    const stylesChart = {
        width: '99%',
        height: '90%',
        margin: 'auto'
    }

    return(
        <Content>
            <div>
                <button>Suspeitos</button>
                <button>Casos</button>
                <button>Mortes</button>
            </div>
            <Chart
                chartType = "BarChart"
                data = {data}
                style = {stylesChart}
            />
        </Content>
    )
}