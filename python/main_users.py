from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

dic_usuarios = {
            1 : {"Nombre":"Mariana", "Edad":21},
            2 : {"Nombre":"Andrea", "Edad":21},
            3 : {"Nombre":"Aime", "Edad":22},
            4 : {"Nombre":"Daniela", "Edad":22},
            5 : {"Nombre":"Naya", "Edad":20},
            }

# DTO: Data Transfer Object
class UsuarioDTO(BaseModel):
    Nombre: str
    Edad: int

@app.post("/v1/usuario")
def create_user_body(usuario: UsuarioDTO):
    id_usuario = len(dic_usuarios) + 1
    nuevo_usuario = {"Nombre": usuario.Nombre, "Edad": usuario.Edad}
    dic_usuarios[id_usuario] = nuevo_usuario
    return dic_usuarios[id_usuario]
   
@app.get("/v1/usuarios")
def read_users():
    return dic_usuarios

@app.get("/v1/usuarios/{id_user}")
def read_users(id_user: int):
    if (id_user in dic_usuarios):
        res = dic_usuarios[id_user]
    else:
        res = "ID no encontrado"
    return res

@app.post("/v1/usuarios/")
def create_user(user_nombre: str, user_edad):
    n = len(dic_usuarios)
    dic_usuarios[n+1] = {"Nombre": user_nombre, "Edad": user_edad}
    return dic_usuarios

