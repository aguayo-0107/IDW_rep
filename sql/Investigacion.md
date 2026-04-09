# Investigación SQLite
## Mariana Aguayo

### 1- ¿Qué es una transacción? ¿Para qué se usan?
Una transacción es una unidad lógica de procesamiento en una base de datos que agrupa una o varias operaciones (read, insert, update, delete) para que se ejecuten como un solo bloque. Las transacciones deben cumplir con las propiedades **ACID** (Atomicidad, Consistencia, Aislamiento, Durabilidad).

Se usa principalmente para mantener la integridad y consistencia de los datos, incluso si ocurre un fallo en el sistema. Ademas de garantizar que varios usuarios puedan trabajar al mismo tiempo sin romper los datos, ya que en el caso de tener bases de datos multiusuario, tenemos:
- Lectura y escritura continua
- Modificaciones simultaneas

Si no se utilizan transacciones, se puede caer en:
- Errores de sincronizacion
- Corrupcion de datos
- Inconsistencias


### 2- ¿Cómo puedo evitar que el comando para crear una tabla no falle si es que la tabla ya está creada?
Para evitar que `CREATE TABLE` falle podemos usar `IF NOT EXISTS`. Este comando verifica primero si la tabla que queremos crear ya existe, en caso de existir simplemente se omite y continua en lugar de fallar. El comando completo quedaria algo asi:
```
CREATE TABLE IF NOT EXISTS nombreTabla (
    id ...
    columna1 ...
    .
    .
    .
)
```

### 3- ¿Qué es un trigger o disparador? Da dos ejemplos de cuándo es bueno usarlos.
Un trigger es un objeto de una base de datos que contiene un conjunto de comando SQL que se ejecutan, o "disparan", de forma automática cuando se cumplen las condiciones necesarias, suele ser cuando sucede un evento especifico en una tabla o una vista, a su vez el evento suele ser una operación de modificación de datos. 
Ejemplos:
- Crear un historial de cambios
    - Si queremos un historial de cambios podemos hacer que el trigger guarde el cambio en alguna tabla cada que un dato se modifique.
- Stock suficiente
    - En el caso de tiendas, antes de realizar una venta el trigger puede checar si hay stock suficiente para dicha venta. Se puede mandar un mensaje de alerta o rechazar la venta.

### 4- ¿Qué es SQL Injection? ¿Qué implicaciones tiene? 
SQL Injection es una vulnerabilidad en una base de datos. Esto sucede cuando alguien que quiere atacar la base logra insertar, "inyectar", código SQL a dentro de la consulta que la aplicación manda a la base. Por ejemplo al crear un nuevo usuario si el nombre fuera `"DROP DATABASE"` podria dar de baja toda la base de datos. Sucede cuando el sistema no se asegura de limpiar ni validar losd atos que un usuario ingresa. 
Puede implicar el robo de datos, manipulación y corrupción de datos y la perdida de control del servidor. 

### 5- Busca 3 noticias de talla mundial relacionadas con esto, escribe un párrafo de cada una de ellas y escribe el enlace a la noticia.
1. Heartland Payment Systems en 2008

Fue un robo de datos financieros masivos y figura como uno de los robos más importantes en la historia. Sucedio en 2008 aunque la compañía lo admitio hasta el 2009. Los atacantes comprometieron la red de procesamiento de pagos de Heartland y lograron instalar un software espía que les permitio robar la información de más de 100 millones de tarjetas de crédito y débito.

[Link al caso](https://www.twingate.com/blog/tips/Heartland%20Payment%20Systems-data-breach)

2. Sony Pictures Entertainment en 2011

Un colectivo de Hackers llamados LulzSec llevo a cabo un ataque a través de inyección SQL en el sitio web de Sony Pictures. El grupo logró filtrar la base de datos completa de más de 1 millón de usuarios. Esto expuso nombres, correos electrónicos y contraseñas almacenadas en texto plano sin encriptación.

[Link al caso](https://www.welivesecurity.com/la-es/2014/12/23/sony-proxima-pesadilla/)

3. TalkTalk en 2015

TalkTalk es un proveedor británico de telecomunicaciones que sufrió una brecha de seguridad a través de inyección SQL a través de páginas web que no habían sido actualizadas. Este ataque expuso datos personales de más de 150,000 personas y bancarios de más de 15,000 personas. La compañia recibio una multa de 400,000 libras por no implementar medidas de seguridad estándar.

[Link al caso](https://ico.org.uk/about-the-ico/media-centre/talktalk-cyber-attack-how-the-ico-investigation-unfolded/)


### - ¿Qué es un ORM y qué diferencias existen con escribir sentencias de SQL comunes?
Un ORM (Object Relational Mapping) es una técnica de programación que permite interactuar con una base de datos tratando como un objeto, es decir se puede manipular la base a través de programación orientada a objetos. Si pensamos en Java, podriamos manejar las tablas y tuplas como si fueran clases y objetos. 
Las principales diferencias son: 
- en SQL debeos de escribir el comando en string por completo, mientras que con ORM podemos interactuar a través de funciones de la clase.
    
    `SELECT * FROM tabla WHERE id = 1` vs. `tabla.findById(1)`
- ORM reduce el código repetitivo ya que no se tiene que mapear manualmente las columnas devueltas por la consulta a variables, ya que ORM ya los instancia como objetos. 
- ORM protege contra SQL Injection ya que parametrizan los datos ingresados por el usuario automaticamente.
- SQL suele ser más eficiente computacionalmente ya que se tiene control sobre la consulta y la optimización de esta, pero ORM puede generar consultas menos eficientes para relaciones complejas. 



