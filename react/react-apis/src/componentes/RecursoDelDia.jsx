const estilosConfig = {
  default: {
    card: { borderRadius: "12px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.15)" },
    header: { background: "#1d3557", color: "#fff", padding: "10px 20px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px" },
    body: { background: "#fff", padding: "2rem" },
    titulo: { color: "#1d3557", fontFamily: "inherit" },
    texto: { color: "#555" },
    badge1: { background: "#0077b6", color: "#fff" },
    badge2: { background: "#6c757d", color: "#fff" },
    badge3: { background: "#e9ecef", color: "#333" },
    btn: { background: "#0077b6", color: "#fff", border: "none", borderRadius: "6px", padding: "8px 20px" },
    etiqueta: "NASA APOD",
  },
  anime: {
    card: { borderRadius: "0", overflow: "hidden", boxShadow: "6px 6px 0 #ff006e, 12px 12px 0 #8338ec", border: "3px solid #ff006e" },
    header: { background: "linear-gradient(135deg, #ff006e, #8338ec)", color: "#fff", padding: "10px 20px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "3px", fontWeight: "900" },
    body: { background: "#fff0f5", padding: "2rem" },
    titulo: { color: "#8338ec", fontFamily: "'Comic Sans MS', cursive", fontWeight: "900" },
    texto: { color: "#ff006e", fontFamily: "'Comic Sans MS', cursive" },
    badge1: { background: "#ff006e", color: "#fff", borderRadius: "0" },
    badge2: { background: "#8338ec", color: "#fff", borderRadius: "0" },
    badge3: { background: "#ffb3c6", color: "#8338ec", borderRadius: "0" },
    btn: { background: "#ff006e", color: "#fff", border: "3px solid #8338ec", borderRadius: "0", padding: "8px 20px", fontWeight: "900", textTransform: "uppercase" },
    etiqueta: "✨ NASA APOD ✨",
  },
  vintage: {
    card: { borderRadius: "4px", overflow: "hidden", boxShadow: "4px 4px 12px rgba(101,67,33,0.4)", border: "2px solid #8b5e3c" },
    header: { background: "#8b5e3c", color: "#f5deb3", padding: "10px 20px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "4px", fontFamily: "Georgia, serif" },
    body: { background: "#fdf6e3", padding: "2rem", backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(101,67,33,0.05) 28px)" },
    titulo: { color: "#5c3317", fontFamily: "Georgia, serif", fontStyle: "italic" },
    texto: { color: "#7a5c3a", fontFamily: "Georgia, serif", filter: "sepia(0.3)" },
    badge1: { background: "#8b5e3c", color: "#f5deb3", borderRadius: "2px", fontFamily: "Georgia, serif" },
    badge2: { background: "#a0785a", color: "#f5deb3", borderRadius: "2px" },
    badge3: { background: "#f5deb3", color: "#5c3317", borderRadius: "2px" },
    btn: { background: "#5c3317", color: "#f5deb3", border: "1px solid #8b5e3c", borderRadius: "2px", padding: "8px 20px", fontFamily: "Georgia, serif", fontStyle: "italic" },
    etiqueta: "— NASA APOD —",
  },
  disney: {
    card: { borderRadius: "20px", overflow: "hidden", boxShadow: "0 12px 40px rgba(255,215,0,0.4)", border: "3px solid #ffd700" },
    header: { background: "linear-gradient(135deg, #ffd700, #ff6b9d, #a855f7)", color: "#fff", padding: "10px 20px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "2px", fontWeight: "800" },
    body: { background: "linear-gradient(180deg, #fff9fe 0%, #f0f8ff 100%)", padding: "2rem" },
    titulo: { color: "#7c3aed", fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif", fontWeight: "800" },
    texto: { color: "#5b21b6" },
    badge1: { background: "linear-gradient(135deg, #ffd700, #ff6b9d)", color: "#fff", borderRadius: "20px" },
    badge2: { background: "#a855f7", color: "#fff", borderRadius: "20px" },
    badge3: { background: "#fdf4ff", color: "#7c3aed", borderRadius: "20px", border: "1px solid #a855f7" },
    btn: { background: "linear-gradient(135deg, #ffd700, #ff6b9d)", color: "#fff", border: "none", borderRadius: "25px", padding: "10px 24px", fontWeight: "800", textTransform: "uppercase" },
    etiqueta: "🌟 NASA APOD 🌟",
  },
  minimalista: {
    card: { borderRadius: "2px", overflow: "hidden", boxShadow: "none", border: "1px solid #e0e0e0" },
    header: { background: "#fff", color: "#111", padding: "10px 20px", fontSize: "10px", textTransform: "uppercase", letterSpacing: "5px", borderBottom: "1px solid #e0e0e0" },
    body: { background: "#fff", padding: "2rem" },
    titulo: { color: "#111", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: "300", letterSpacing: "1px" },
    texto: { color: "#888", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: "300", lineHeight: "1.8" },
    badge1: { background: "#111", color: "#fff", borderRadius: "0", fontSize: "10px", letterSpacing: "2px" },
    badge2: { background: "#fff", color: "#111", borderRadius: "0", border: "1px solid #111", fontSize: "10px", letterSpacing: "2px" },
    badge3: { background: "#fff", color: "#888", borderRadius: "0", border: "1px solid #e0e0e0", fontSize: "10px" },
    btn: { background: "#fff", color: "#111", border: "1px solid #111", borderRadius: "0", padding: "8px 24px", textTransform: "uppercase", letterSpacing: "3px", fontSize: "11px" },
    etiqueta: "NASA APOD",
  },
  neon: {
    card: { borderRadius: "8px", overflow: "hidden", boxShadow: "0 0 20px #00fff7, 0 0 40px #00fff755, inset 0 0 20px rgba(0,255,247,0.05)", border: "1px solid #00fff7", background: "#0a0a1a" },
    header: { background: "transparent", color: "#00fff7", padding: "10px 20px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "4px", textShadow: "0 0 10px #00fff7, 0 0 20px #00fff7", borderBottom: "1px solid #00fff733" },
    body: { background: "transparent", padding: "2rem" },
    titulo: { color: "#ff00ff", fontFamily: "'Courier New', monospace", fontWeight: "700", textShadow: "0 0 10px #ff00ff, 0 0 20px #ff00ff" },
    texto: { color: "#7efff5", fontFamily: "'Courier New', monospace" },
    badge1: { background: "transparent", color: "#00fff7", border: "1px solid #00fff7", borderRadius: "4px", textShadow: "0 0 8px #00fff7", boxShadow: "0 0 8px #00fff755" },
    badge2: { background: "transparent", color: "#ff00ff", border: "1px solid #ff00ff", borderRadius: "4px", textShadow: "0 0 8px #ff00ff", boxShadow: "0 0 8px #ff00ff55" },
    badge3: { background: "transparent", color: "#ffff00", border: "1px solid #ffff00", borderRadius: "4px", textShadow: "0 0 8px #ffff00" },
    btn: { background: "transparent", color: "#00fff7", border: "1px solid #00fff7", borderRadius: "4px", padding: "8px 20px", textTransform: "uppercase", letterSpacing: "2px", textShadow: "0 0 10px #00fff7", boxShadow: "0 0 12px #00fff755" },
    etiqueta: "◈ NASA APOD ◈",
  },
};

export function RecursoDelDia({
  fecha,
  explicacion,
  tipoContenido,
  titulo,
  url,
  estilo = "default",
}) {
  const esImagen = tipoContenido === "image";
  const cfg = estilosConfig[estilo] ?? estilosConfig.default;

  return (
    <div style={cfg.card}>
      <div style={cfg.header}>{cfg.etiqueta}</div>

      {esImagen ? (
        <img src={url} style={{ width: "100%", height: "auto", display: "block" }} alt={titulo} />
      ) : (
        <div style={{ background: cfg.body.background, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", minHeight: "120px" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ margin: "0 0 8px", ...cfg.texto, textTransform: "uppercase", fontSize: "12px" }}>
              Recurso del día
            </p>
            <span style={{ ...cfg.badge2, padding: "4px 10px", borderRadius: cfg.badge2.borderRadius ?? "4px", display: "inline-block" }}>{tipoContenido}</span>
          </div>
        </div>
      )}

      <div style={cfg.body}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center", marginBottom: "12px" }}>
          <span style={{ ...cfg.badge1, padding: "4px 10px", display: "inline-block", fontSize: cfg.badge1.fontSize ?? "12px" }}>NASA APOD</span>
          <span style={{ ...cfg.badge2, padding: "4px 10px", display: "inline-block", fontSize: cfg.badge2.fontSize ?? "12px" }}>{tipoContenido}</span>
          <span style={{ ...cfg.badge3, padding: "4px 10px", display: "inline-block", fontSize: cfg.badge3.fontSize ?? "12px" }}>{fecha}</span>
        </div>

        <h2 style={{ ...cfg.titulo, fontSize: "1.25rem", marginBottom: "10px" }}>{titulo}</h2>
        <p style={{ ...cfg.texto, marginBottom: "1.5rem", fontSize: "14px", lineHeight: "1.7" }}>
          {explicacion}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...cfg.btn, display: "inline-block", textDecoration: "none", cursor: "pointer" }}
        >
          Ver recurso original
        </a>
      </div>
    </div>
  );
}
