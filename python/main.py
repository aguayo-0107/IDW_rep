from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Nombre": "Mariana",
            "Edad": 21,
            "Color": "#4BC979" 
            }

@app.get("/v1/hola-mundo")
def hola_mundo():
    return {"Hola":"Mundo"
            }
    
@app.post("/v1/hola-mundo")
def hola_mundo():
    return {"Hola":"Mundo POST"}
    
@app.get("/v1/usuario/{persona_id}")
def read_personas(persona_id: int):
    personas = { 
                1 : {"Nombre":"Mariana", "Edad":21},
                2 : {"Nombre":"Andrea", "Edad":21},
                3 : {"Nombre":"Aime", "Edad":22},
                4 : {"Nombre":"Daniela", "Edad":22},
                5 : {"Nombre":"Naya", "Edad":20},
                }
    if (persona_id in personas):
        res = personas[persona_id]
    else:
        res = "ID no encontrado"
    return res


@app.get("/v1/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}