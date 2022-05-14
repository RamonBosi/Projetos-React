import { Content } from "./styles"

export default function Graphic(){
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
        </Content>
    )
}