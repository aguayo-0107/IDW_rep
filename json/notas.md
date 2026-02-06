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

Las funciones declaradas pueden correr donde sea que se llamen, incluso si es antes de su definicion porq es una funcion declarada globalmente?
Pero una funcion flecha no, esa si necesita estar definida antes de ser llamada.