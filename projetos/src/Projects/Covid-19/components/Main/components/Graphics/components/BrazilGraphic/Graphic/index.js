import { Content } from "./styles";
import { Chart } from 'react-google-charts'

export default function Graphic(){

    const data = [
        ["Country", "Popularity"],
        ['Espírito Santo', 300],
        ['Amazonas', 50],
        ['Mato Grosso', 800],
        ['Acre', 40]
    ]

    const stylesChart = {
        width: '99%',
        height: '90%',
        margin: 'auto'
    }

    const options = {
        region: 'BR',
        resolution: 'provinces',
    }

    return(
        <Content>
            <div>
                <button>Suspeitos</button>
                <button>Casos</button>
                <button>Mortes</button>
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