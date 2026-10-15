/* Vorah Company — "Resultados" stats band (dark) */
const { Stat: VKStat } = window.VorahCompanyDesignSystem_0977e7;

function Results() {
  const stats = [
    ["+430", "Posts no feed para clientes"],
    ["3M+", "Interações geradas"],
    ["3 anos", "de experiência"],
    ["85%", "Taxa de sucesso"],
  ];
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--charcoal-900)" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "url(../../assets/pattern-v.png)", backgroundSize: "120px", opacity: 0.05, filter: "invert(1)" }} />
      <div style={{ position: "relative", maxWidth: "var(--container-xl)", margin: "0 auto", padding: "76px 28px" }}>
        <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "14px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--amber-500)", marginBottom: "10px" }}>
          Nosso impacto em números
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-2xl)", color: "var(--cream-50)", margin: "0 0 44px", letterSpacing: "-0.02em" }}>
          Resultados que sustentam a estratégia
        </h2>
        <div className="vk-results-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          {stats.map(([value, label]) => (
            <div key={label} style={{ paddingTop: "20px", borderTop: "2px solid var(--amber-500)" }}>
              <VKStat value={value} label={label} tone="cream" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.VK = Object.assign(window.VK || {}, { Results });
