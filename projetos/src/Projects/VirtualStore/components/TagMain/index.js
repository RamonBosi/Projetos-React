import { TagMain } from "./styles"
import Filter from "./Filter"
import Products from "./Products"

export default function MainContent(){
    return(
        <TagMain>
            <Filter/>
            <Products/>
        </TagMain>
    )
}