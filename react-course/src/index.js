import React from "react";
import ReactDOM from "react-dom/client";
import Greeting, { Farewell }  from "./Greeting";
import Product from "./Product";
import { Button } from "./Button";
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <>
    <Greeting x={20} y={20}/>
    <Farewell />
    <Product />
    <Greeting x={10} y={20} />
    <Button text="Cick me"/>
    <Button text="Payme"/>
    <Button text="Go to..."/>
  </>
);
