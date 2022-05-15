import { Content } from "./styles"
import { Chart } from 'react-google-charts'

export default function Graphic(){

    const { stylesChart, data } = {
        stylesChart: {
            width: '100%',
            height: '100%'
        },
        data: [
            ['Estado Selecionado', 'Suspeitos', 'Casos', 'Mortes'],
            ['Espírito Santo', 300, 500, 200]
        ]
    }

    return(
        <Content>
            <div>
                <span className = 'material-icons'>expand_more</span>
                <select>
                    <option>São Paulo</option>
                    <option>Rio de Janeiro</option>
                    <option>Espírito Santo</option>
                </select>
            </div>
            <div>
                <Chart
                    chartType="ColumnChart"
                    style = {stylesChart}
                    data = {data}
                />
            </div>
        </Content>
    )
}