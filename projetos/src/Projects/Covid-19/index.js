import { GlobalStyles } from "./GlobalStyles"
import ContextLinksProvider from "./Contexts/ContextLinks"
// import Menu from './components/Menu'
import Main from './components/Main'
// import Footer from './components/Footer' 

export default function Covid19(){
    return (
        <>
            <GlobalStyles/>
            <ContextLinksProvider>
                {/* <Menu/> */}
                <Main/>
            </ContextLinksProvider>
            {/* <Footer/> */}
        </>
    )
}