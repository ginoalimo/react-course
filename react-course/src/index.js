import React, { useState } from "react";
import ReactDOM from "react-dom/client";
/* import Greeting, { Farewell } from "./Greeting";
import Product from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar"
import { Post } from "./Post"; */

const root = ReactDOM.createRoot(document.getElementById("root"));

/* const users = [
  {
    id: 1,
    name: "John Doe",
    image: "https://robohash.org/gino",
  },
  {
    id: 2,
    name: "Janne Doe",
    image: "https://robohash.org/gino2",
  },
  {
    id: 2,
    name: "Janne adasdasda",
    image: "https://robohash.org/gino3",
  }
] */

function Counter() {

  let [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => {
        setCount(++count)
      }}>
        Increment
      </button>
    </div >
  )
}

root.render(
  <>
    {/* <Greeting x={20} y={20}/>
    <Farewell />
    <Product />
    <Greeting x={10} y={20} />
    <Button text="Cick me"/>
    <Button text="Payme"/>
    <Button text="Go to..."/>
    <TaskCard ready={false}/>
    <Saludar/>
    <Post/>

    <input id="hola" onChange={ (e) => console.log(e.target.value)} /> */}
    {/* {users.map((user, index) => {
      return <div>
        <div >
          <h1 key={index}>{user.name}</h1>
          <img src={user.image} alt="Imagen de robot"/>
        </div>
      </div>
    })}; */}

    <Counter />
  </>
);