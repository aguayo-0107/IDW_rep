:)

### Funciones
Puede ser una sintaxis mas parecida a python, que es la siguiente:
```
function saludar(nombre) {
    return "Hola, " + nombre;
}
```
o una forma conocida como "funcion flecha"
```
const saludar = (nombre) => {
    return "Hola," + nombre;
}
```
una version incluso mas corta es:
```
const saludar = (nombre) => "Hola," + nombre
```

Las funciones declaradas pueden correr donde sea que se llamen, incluso si es antes de su definicion porq es una funcion declarada. Como tal una función flecha, es guardar una funcion en una constante o tratar la función como un objeto.

### Objetos
const alumno = {
    clave_unica: 000213123,
    nombre: "Claudio",
    carrera: "IA",
    activo: false
};

### DOM (Documento Objetc Model)
Cada etiqueta de HTML es un nodo
Los textos dentro de las etiquetas son nodos tipo #text
El nodo raiz es Document, y todo lo demas cuelga de el.
Podemos acceder a estos nodos con JavaScript usando document.query()

<button onclick="saludar()">Saludar</button>
<script>
    function saludar() {
        alert("Hola! Has hecho clic en el boton.")
    }
</script>