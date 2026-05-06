export function RecursoDelDia({
  fecha,
  explicacion,
  tipoContenido,
  titulo,
  url,
}) {
  const esImagen = tipoContenido === "image";

  return (
    <div className="card border-0 shadow-lg overflow-hidden">
      {esImagen ? (
        <img src={url} className="card-img-top" alt={titulo} />
      ) : (
        <div className="bg-dark text-white d-flex align-items-center justify-content-center p-5">
          <div className="text-center">
            <p className="mb-1 text-uppercase small text-info-emphasis fw-semibold">
              Recurso del día
            </p>
            <span className="badge text-bg-light">{tipoContenido}</span>
          </div>
        </div>
      )}

      <div className="card-body p-4 p-md-5">
        <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
          <span className="badge text-bg-primary">NASA APOD</span>
          <span className="badge text-bg-secondary">{tipoContenido}</span>
          <span className="badge text-bg-light text-dark">{fecha}</span>
        </div>

        <h2 className="card-title h3 mb-3">{titulo}</h2>
        <p className="card-text text-body-secondary lh-lg mb-4">
          {explicacion}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Ver recurso original
        </a>
      </div>
    </div>
  );
}
