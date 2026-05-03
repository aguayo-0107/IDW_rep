import { useState } from "react";

function PantallaConBoton() {
  const [contador, setContador] = useState(0);

  return (
    <div>
        <h1>Boton con contador y ESTADO</h1>
        <button 
            onClick={() => {
                setContador((prev) => prev + 1);
                setContador((contadorAnterior) => contadorAnterior + 1);
                setContador((valorAntes) => valorAntes + 1);
            }}
        >
            Boton
        </button>
        <br/>
        {contador}
    </div>
  );
}

export default PantallaConBoton;