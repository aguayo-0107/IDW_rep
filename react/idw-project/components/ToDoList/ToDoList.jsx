import SingleTask from "./SingleTask";
import { useState } from 'react'

const tareasIniciales = [
  { id: 1, texto: "Normalización en bases de datos y consultas - IDW", colorFondo: "#dd9292", estaCompletada: false },
  { id: 2, texto: "React Todo List - IDW", colorFondo: "#dbdd92", estaCompletada: false },
  { id: 3, texto: "Backlog en github - ADSI", colorFondo: "#9cdd92", estaCompletada: false },
  { id: 4, texto: "Proyecto 2 - FMC", colorFondo: "#92d1dd", estaCompletada: false },
  { id: 5, texto: "Reporte 11 - CL", colorFondo: "#929fdd", estaCompletada: false },
  { id: 6, texto: "Carpeta - CIC", colorFondo: "#ce92dd", estaCompletada: false },
  { id: 7, texto: "Proyecto Final - Meca", colorFondo: "#eda1da", estaCompletada: false },
]

function TodoList(props) {
    const [tareas, setTareas] = useState(tareasIniciales)

    const completarTarea = (id) => {
        setTareas(tareas => 
            tareas.map(tarea =>
                (tarea.id === id) 
                ? { id:tarea.id, texto: tarea.texto, colorFondo: tarea.colorFondo, estaCompletada: !tarea.estaCompletada }
                : tarea
            ))
    }

    return (
    <div>
        <h1>To Do:</h1>
        <h2 style={{textAlign:"right", margin: "0.5rem 6rem"}}>- Mariana Aguayo</h2>

        <div>
        {tareas.map(tarea => (
            <SingleTask
            id={tarea.id}
            texto={tarea.texto}
            colorFondo={tarea.colorFondo}
            estaCompletada={tarea.estaCompletada}
            onCompletar={() => completarTarea(tarea.id)}
            />
        ))}
        </div>
    </div>
    )
}

export default TodoList