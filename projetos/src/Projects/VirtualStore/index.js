import Home from './components';
import { GlobalStyles } from './GlobalStyles'
import { Route, Routes } from "react-router-dom";

export default function VirtualStore(){
    return(
        <>
            <GlobalStyles/>
            <Routes>
                <Route path = '/' element={<Home/>}/>
            </Routes>
        </>
    )
}