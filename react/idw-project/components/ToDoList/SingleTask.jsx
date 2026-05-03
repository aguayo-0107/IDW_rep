
export function SingleTask (props) {

    return (
        <> 
        <div className="singleTask" onClick={props.onCompletar}>
            <div className={`checkBox ${props.estaCompletada ? 'checked' : ''}`}>
                {props.estaCompletada && <span>✓</span>}
            </div>
            
            <p className={`task ${props.estaCompletada ? 'checked' : ''}`} style={{backgroundColor: props.colorFondo}}>{props.texto}</p>
        </div>
        </>
    );
}

export default SingleTask;