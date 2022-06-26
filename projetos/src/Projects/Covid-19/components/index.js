import ContextLinksProvider from "../Contexts/ContextLinks"
import Menu from './Menu'
import Main from './Main'
import Footer from './Footer'

export default function Home(){
    return(
        <>
            <ContextLinksProvider>
                <Menu/>
                <Main/>
            </ContextLinksProvider>
            <Footer/>
        </>
    )
}