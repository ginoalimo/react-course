import React from "react";
import ReactDOM from "react-dom/client";
import Greeting, { Farewell }  from "./Greeting";
import Product from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar"

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <>
    {/* <Greeting x={20} y={20}/>
    <Farewell />
    <Product />
    <Greeting x={10} y={20} />
    <Button text="Cick me"/>
    <Button text="Payme"/>
    <Button text="Go to..."/> */}
    <TaskCard ready={false}/>
    <Saludar/>

    <input id="hola" onChange={ (e) => console.log(e.target.value)} />
  </>
);
