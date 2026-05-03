function OperacionBoton(props) {

  return (
    <div>
        <button 
            onClick={() => {
                props.cambiar((prev) => props.operacion(prev, props.numero));
            }}
        >
            Boton
        </button>
        <br/>
    </div>
  );
}

export default OperacionBoton;