# Normalización en bases de datos
Mariana Aguayo

Fuente: [IBM](https://www.ibm.com/mx-es/think/topics/database-normalization)


## ¿Qué es la normalización?

El artículo define la normalización como un **proceso de diseño de bases de datos** que organiza los datos en estructuras de tablas específicas con los objetivos de:

- Mejorar la **integridad de los datos**
- Prevenir **anomalías de datos**
- Minimizar la **redundancia de datos**
- Mejorar el **rendimiento de las consultas**

Edgar F. Codd fue el que propuso la normalización en los años 70 como solución a las "dependencias indeseables" entre atributos que generaban inconsistencias y pérdida de datos.

---

## Beneficios destacados

| Beneficio | Descripción |
|-----------|-------------|
| **Prevención de anomalías** | Al descomponer tablas grandes en tablas más pequeñas, los cambios son menos propensos a errores |
| **Reducción de redundancia** | Se elimina la duplicación de datos no intencional |
| **Ahorro en almacenamiento** | Menos datos duplicados = menos costo de almacenamiento  |
| **Consultas más rápidas** | Menor redundancia implica menos procesamiento al hacer búsquedas |

---

## Anomalías que previene

El artículo enfatiza tres tipos de anomalías:

* Anomalía de Inserción
    * No se puede insertar un registro porque faltan valores en columnas requeridas.

* Anomalía de Eliminación
    * Borrar un registro elimina datos importantes de manera no intencional.

* Anomalía de Actualización
    * Un dato se actualiza en un lugar pero no en todos los lugares donde está duplicado, lo que genera inconsistencia.

---

## Claves en la Normalización

IBM resalta que las **claves son fundamentales** para las reglas de las formas normales:

| Tipo de Clave | Descripción |
|---------------|-------------|
| **Clave Primaria** | Identifica de forma única cada fila, no permite nulos ni duplicados |
| **Clave Compuesta** | Formada por dos o más columnas |
| **Clave Candidata** | Tiene características de clave primaria pero no fue designada como tal |
| **Clave Foránea** | Referencia a la clave primaria de otra tabla para establecer relaciones |
| **Super clave** | Similar a la clave compuesta, pero con más columnas de las necesarias para identificar filas |

---

## Las Formas Normales (Resumen del Artículo)

### 1FN - Primera Forma Normal
**Regla:** Cada celda debe tener un solo valor atómico; no deben existir grupos repetidos de columnas.

### 2FN - Segunda Forma Normal
**Regla:** Ningún atributo no clave debe depender **parcialmente** de la clave primaria compuesta.

### 3FN - Tercera Forma Normal
**Regla:** Ningún atributo no clave debe depender de otro atributo no clave (no deben existir **dependencias transitivas**).

### 4FN - Dependencias Multivaluadas
Una tabla **no debe tener dependencias multivaluadas** (dos atributos independientes que dependen solo de la PK).  

### 5FN - Dependencia de Unión (Join)
La más alta forma de normalización. Una tabla debe descomponerse en tablas más pequeñas **solo si es posible reconstituir la original sin pérdida ni creación de datos extra**.

---

## Retos y Desventajas de la Normalización

IBM también reconoce que pueden existir razones en contra de la normalización:

- **Se usan más JOIN en las consultas:** Al tener más tablas, las consultas se vuelven más complejas y pueden ser más lentas.
- **Mayor complejidad del esquema:** Requiere mayor experiencia por parte de los diseñadores y administradores de bases de datos.
