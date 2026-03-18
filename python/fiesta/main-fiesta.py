from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from utils import generar_guid
from models import FiestaDTO
from models import InvitadoDTO

app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

fiestas_memoria = {} 
invitados_memoria = {} 

@app.post("/v1/fiesta")
def crear_fiesta(fiesta: FiestaDTO):
    id_generado = generar_guid()
    fiestas_memoria[id_generado] = {"id": id_generado, "nombre": fiesta.nombre, "fecha": fiesta.fecha, "lugar": fiesta.lugar, "activo": True}
    return fiestas_memoria[id_generado]

@app.get("/v1/fiesta")
def get_fiestas(tipo: str = "todas"):
    fiestas = list(fiestas_memoria.values())
    
    if (tipo == "activas"):
        fiestas = list(filter(lambda x: x["activo"], fiestas))
    elif (tipo == "canceladas"):
        fiestas = list(filter(lambda x: not x["activo"], fiestas))
    return fiestas

@app.get("/v1/fiesta/{id_fiesta}")
def get_fiesta(id_fiesta: str):
    return fiestas_memoria[id_fiesta]

@app.post("/v1/fiesta/{id_fiesta}/cancelar")
def cancelar_fiesta(id_fiesta: str):
    fiestas_memoria[id_fiesta]["activo"] = False
    return fiestas_memoria[id_fiesta]

@app.post("/v1/invitado")
def crear_invitado(invitado: InvitadoDTO):
    id_generado = generar_guid()
    invitados_memoria[id_generado] = {"id": id_generado, "nombre": invitado.nombre, "fiesta": invitado.id_fiesta}
    return invitados_memoria[id_generado]

@app.get("/v1/invitado")
def get_invitados():
    alumnos = list(invitados_memoria.values())
    return alumnos

@app.get("/v1/invitado/{id_invitado}")
def get_invitado(id_invitado: str):
    return invitados_memoria[id_invitado]
