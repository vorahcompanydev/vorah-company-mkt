/* Vorah Company — testimonials */
const { Card: VKTCard, Avatar: VKTAvatar } = window.VorahCompanyDesignSystem_0977e7;

function Testimonials() {
  const quotes = [
    ["A Vorah trouxe clareza e método para a nossa presença online — hoje vendemos com consistência.", "Ana Martins", "Pet Shop Lumi"],
    ["Atendimento humano de verdade. Sentimos que o resultado é construído junto, a quatro mãos.", "Rafael Costa", "Costa Consultoria"],
    ["Saímos do “postar por postar” para uma estratégia com foco em faturamento.", "Juliana Reis", "Studio JR"],
  ];
  return (
    <section style={{ background: "var(--cream-50)" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "88px 28px" }}>
        <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "14px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--amber-700)", marginBottom: "10px" }}>
          O que nossos clientes dizem
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-2xl)", color: "var(--charcoal-900)", margin: "0 0 44px", letterSpacing: "-0.02em", maxWidth: "640px", textWrap: "balance" }}>
          Marcas que cresceram com estratégia, leveza e parceria
        </h2>
        <div className="vk-testi-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "18px" }}>
          {quotes.map(([quote, name, org]) => (
            <VKTCard key={name} tone="paper">
              <div style={{ fontFamily: "var(--font-display)", fontSize: "34px", color: "var(--amber-500)", lineHeight: 1, marginBottom: "6px" }}>“</div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "19px", fontStyle: "italic", lineHeight: 1.4, color: "var(--charcoal-900)", margin: "0 0 24px" }}>{quote}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <VKTAvatar name={name} />
                <div>
                  <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "14px", color: "var(--charcoal-900)" }}>{name}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--ink-500)" }}>{org}</div>
                </div>
              </div>
            </VKTCard>
          ))}
        </div>
      </div>
    </section>
  );
}

window.VK = Object.assign(window.VK || {}, { Testimonials });
