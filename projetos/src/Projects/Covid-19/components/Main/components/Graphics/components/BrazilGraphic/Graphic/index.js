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
        width: '100%',
        height: '100%'
    }

    return(
        <Content>
            <Chart
                chartType = "ColumnChart"
                data = {data}
                style = {stylesChart}
            />
        </Content>
    )
}