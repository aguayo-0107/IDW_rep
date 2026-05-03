import { Galeria } from "../../idw-project/components/Galeria";
import {useState } from "react";
import OperacionBoton from "../components/estados-react/OperacionBoton";

function App() {
  const [contador, setContador] = useState(0);

  return (
  <div>
    <h1>Contador: {contador}</h1>
    <h2>Suma 10</h2>
    <OperacionBoton cambiar={setContador} operacion={(prev, num) => prev + num} numero={10}/>
    <h2>Resta 5</h2>
    <OperacionBoton cambiar={setContador} operacion={(prev, num) => prev - num} numero={5}/>
    <h2>Multiplica por -1</h2>
    <OperacionBoton cambiar={setContador} operacion={(prev, num) => prev * num} numero={-1}/>
    <h2>Resta 2</h2>
    <OperacionBoton cambiar={setContador} operacion={(prev, num) => prev - num} numero={2}/>
    <h2>Suma 1</h2>
    <OperacionBoton cambiar={setContador} operacion={(prev, num) => prev + num} numero={1}/>

  </div>
  );
}

export default App;