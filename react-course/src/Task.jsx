import "./task.css";

export function TaskCard( {ready} ) {
  const cardStyles = {
    background: "#202020",
    color: "#FFFFFF",
  };

  return (
    <div /* style={cardStyles} */ className="card">
      <h1>Mi primer tarea</h1>
      <span>{
        ready ? "Tarea realizada" : "Tarea pendiente"
      }</span>
      
    </div>
  );
}
