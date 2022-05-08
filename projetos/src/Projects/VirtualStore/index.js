import Menu from "./components/Menu";
import TagMain from "./components/TagMain";
import Footer from './components/Footer'
import { GlobalStyles } from './GlobalStyles'

export default function VirtualStore(){
    return(
        <>
            <GlobalStyles/>
            <Menu/>
            <TagMain/>
            <Footer/>
        </>
    )
}