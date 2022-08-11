function Greeting(props) {
  function add(x, y) {
    return x + y;
  }

  return add(props.x, props.y);
}

export function Farewell() {
  function dif(a, b) {
    return a - b;
  }

  return dif(30, 20);
}

export default Greeting;
