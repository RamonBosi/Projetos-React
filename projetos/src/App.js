import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProjectRoutes } from "./Routes/RouteContext";
import Home from "./Routes/Home";
import VirtualStore from "./Projects/VirtualStore";
import Covid19 from "./Projects/Covid-19";
import ToDoList from "./Projects/ToDoList";

export default function App() {
  
  const { rootRoute } = useContext(ContextProjectRoutes)

  return (
      <BrowserRouter>
        <Routes>
          <Route path = {rootRoute} element = {<Home/>}/>
          <Route path = {`${rootRoute}/VirtualStore/*`} element = {<VirtualStore/>}/>
          <Route path = {`${rootRoute}/Covid19/*`} element = {<Covid19/>}/>
          <Route path = {`${rootRoute}/ToDoList/*`} element = {<ToDoList/>}/>
        </Routes>
      </BrowserRouter>
  )
}