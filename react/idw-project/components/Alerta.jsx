export function Alerta(props) {
    let color;
    switch (props.tipo) {
        case "ok":
            color = "green";
            break;
        case "advertencia":
            color = "yellow";
            break;
        case "error":
            color = "red";
            break;
        default: 
            color= "blue";
    }
    return (
        <button style={{ backgroundColor: color}} onClick={() => alert(props.texto)}>
        {props.tipo}
        </button>

    );
}

export default Alerta;