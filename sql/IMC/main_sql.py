# API fon fastapi para calcular el IMC (Índice de Masa Corporal)
from fastapi import FastAPI
from models import Persona
import sqlite3

app = FastAPI()

# Instanciamos conexion a la base de datos
con = sqlite3.connect('imc.db')
cur = con.cursor()

cur.execute('''      
        CREATE TABLE IF NOT EXISTS imc_tabla (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            peso INTEGER NOT NULL,
            talla REAL NOT NULL,
            imc REAL NOT NULL
        );
    ''')
con.commit()
con.close()

@app.post("/calculate_imc/")
def calculate_imc(person: Persona):
    imc = person.peso / (person.talla ** 2)
    
    con = sqlite3.connect('imc.db')
    cur = con.cursor()
    
    cur.execute('''
        INSERT INTO imc_tabla (nombre, peso, talla, imc)
        VALUES (?, ?, ?, ?);
    ''', (person.nombre, person.peso, person.talla, imc))
    con.commit()
    
    cur.execute('''
        SELECT last_insert_rowid();
    ''')
    id_persona = cur.fetchone()[0]
    
    cur.execute('''
        SELECT id, nombre, peso, talla, imc FROM imc_tabla WHERE id = ?;
    ''', (str(id_persona)))
    persona = cur.fetchone()
    con.close()

    persona_dict = {"id": persona[0], "nombre": persona[1], "peso": persona[2], "talla": persona[3], "imc": persona[4]}
    return persona_dict

@app.get("/get_persona/{id_persona}")
def get_persona(id_persona: int):
    con = sqlite3.connect('imc.db')
    cur = con.cursor()
    
    cur.execute('''
        SELECT id, nombre, peso, talla, imc FROM imc_tabla WHERE id = ?;
    ''', (str(id_persona)))
    persona = cur.fetchone()
    con.close()
    
    if persona:
        persona_dict = {"id": persona[0], "nombre": persona[1], "peso": persona[2], "talla": persona[3], "imc": persona[4]}
        return persona_dict
    else:
        return {"error": "Persona no encontrada"}

@app.get("/get_all_personas/")
def get_all_personas():
    # Obtener la información de todas las personas
    con = sqlite3.connect('imc.db')
    cur = con.cursor()
    
    cur.execute('''
        SELECT id, nombre, peso, talla, imc FROM imc_tabla;
    ''')
    personas = cur.fetchall()
    persona_dict = {}
    for persona in personas:
        persona_dict[persona[0]]= {"id": persona[0], "nombre": persona[1], "peso": persona[2], "talla": persona[3], "imc": persona[4]}
    con.close()
    
    return persona_dict

@app.put("/update_persona/{id_persona}")
def update_persona(id_persona: int, person: Persona):
    # Actualizar la información de una persona por su ID
    imc = person.peso / (person.talla ** 2)
    
    con = sqlite3.connect('imc.db')
    cur = con.cursor()
    
    cur.execute('''
        UPDATE imc_tabla
        SET nombre = ?,
            peso = ?,
            talla = ?,
            imc = ?
        WHERE id = ?;
    ''', (person.nombre, person.peso, person.talla, imc, str(id_persona)))
    con.commit()
    
    cur.execute('''
        SELECT id, nombre, peso, talla, imc FROM imc_tabla WHERE id = ?;
    ''', (str(id_persona)))
    persona = cur.fetchone()
    con.close()
    
    persona_dict = {"id": persona[0], "nombre": persona[1], "peso": persona[2], "talla": persona[3], "imc": persona[4]}
    return persona_dict

@app.delete("/delete_persona/{id_persona}")
def delete_persona(id_persona: int):
    con = sqlite3.connect('imc.db')
    cur = con.cursor()
    
    count = cur.execute('''
                SELECT COUNT(*) FROM imc_tabla;
                ''')
    count1 = (count.fetchone()[0])
    
    cur.execute('''
                DELETE FROM imc_tabla WHERE id = ?;
                ''', (str(id_persona)))
    con.commit()
    count = cur.execute('''
                SELECT COUNT(*) FROM imc_tabla;
                ''')
    count2 = (count.fetchone()[0])
    con.close()
    
    print(count1, count2)
    if (count1 <= count2):
        return {"error": "Persona no encontrada"}
    else:
        return {"message": "Persona eliminada"}