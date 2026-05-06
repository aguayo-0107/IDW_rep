import { useEffect, useState } from "react";
import { RecursoDelDia } from "./RecursoDelDia";

export function NasaDatosDelDiaContenedor() {
  // variable de estado para guardar la respuesta de la API
  const [datosDelDia, setDatosDelDia] = useState(null);
  // useEffect para sincronizar con info externa, en este caso la API de NASA
  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=LcUzaxu7d2y4ByUXHW3exnnJECp7GtPE6sOmitk8",
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const datosTransformados = {
          fecha: data.date,
          explicacion: data.explanation,
          tipoContenido: data.media_type,
          titulo: data.title,
          url: data.url,
        };
        setDatosDelDia(datosTransformados);
      });
  }, []);

  if (datosDelDia === null) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xxl-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center py-5">
                <div className="spinner-border text-primary mb-3" role="status" />
                <p className="mb-0 fw-medium">Cargando la tarjeta del día...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const estilos = ["default", "anime", "vintage", "disney", "minimalista", "neon"];

  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
        {estilos.map((estilo) => (
          <div className="col" key={estilo}>
            <RecursoDelDia
              fecha={datosDelDia.fecha}
              explicacion={datosDelDia.explicacion}
              tipoContenido={datosDelDia.tipoContenido}
              titulo={datosDelDia.titulo}
              url={datosDelDia.url}
              estilo={estilo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
