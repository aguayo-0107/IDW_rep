import Perfil from "./Perfil";
import PerfilConParametros from "./PerfilConParametros";
import Alerta from "./Alerta";
import PantallaConBoton from "./estados-react/PantallaConBoton";

export const Galeria = () => {
  const [contador, setContador] = useState(0);

  return (
    <>
      <PantallaConBoton />
      <br/><br/>
      <Alerta texto={"OK"} tipo="ok"/>
      <Alerta texto={"Advertencia"} tipo="advertencia"/>
      <Alerta texto={"Error"} tipo="error"/>
      <Alerta texto={"Default"} tipo="default"/>
    </>
  );
};

export function GaleriaConArreglo() {
  const perfiles = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg/330px-Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg",
      textoAlternativo: "Charles Darwin",
    },
    {
      url: "https://pymstatic.com/29788/conversions/jean-baptiste-lamarck-wide.jpg",
      textoAlternativo: "Jean-Baptiste Lamarck",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Marie_Curie_%281900%29.jpg",
      textoAlternativo: "Marie Curie",
    },
  ];

  // regreso los perfiles iterando sobre el arreglo con map
  return (
    <>
      {perfiles.map((perfil, index) => (
        <PerfilConParametros
          key={index}
          url={perfil.url}
          textoAlternativo={perfil.textoAlternativo}
        />
      ))}
    </>
  );
}