/* Vorah Company — hero + pricing band */
const { Button: VKHeroBtn, Badge: VKHeroBadge } = window.VorahCompanyDesignSystem_0977e7;

function Hero() {
  return (
    <section id="top" style={{ position: "relative", overflow: "hidden", background: "var(--cream-50)" }}>
      {/* faint flower texture, bleeding off the right edge */}
      <img
        src="../../assets/mark-symbol-amber.svg"
        alt=""
        aria-hidden="true"
        style={{ position: "absolute", right: "-90px", top: "40px", width: "360px", opacity: 0.10, transform: "rotate(8deg)", pointerEvents: "none" }}
      />
      <div
        style={{
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          padding: "72px 28px 40px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "48px",
          alignItems: "center",
        }}
        className="vk-hero-grid"
      >
        <div>
          <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "14px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--amber-700)", marginBottom: "20px" }}>
            Gestão de redes sociais
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(40px, 5.4vw, 72px)", lineHeight: 1.02, letterSpacing: "-0.025em", color: "var(--charcoal-900)", margin: 0, textWrap: "balance" }}>
            Aumentar vendas nas redes sociais?
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "19px", lineHeight: 1.6, color: "var(--ink-500)", maxWidth: "520px", margin: "22px 0 32px", textWrap: "pretty" }}>
            Ajudamos pequenas e médias empresas a se posicionar com clareza, atrair clientes e vender com consistência.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
            <VKHeroBtn as="a" href="#contato" size="lg">Entrar em contato</VKHeroBtn>
            <VKHeroBtn as="a" href="#servicos" variant="ghost" size="lg">O que fazemos</VKHeroBtn>
          </div>
          <div style={{ display: "flex", gap: "26px", marginTop: "40px", flexWrap: "wrap" }}>
            <MiniStat value="+430" label="Posts no feed" />
            <MiniStat value="3 anos" label="de experiência" />
            <MiniStat value="85%" label="taxa de sucesso" />
          </div>
        </div>

        {/* photo placeholder panel — on-brand */}
        <div style={{ position: "relative" }}>
          <PhotoPanel tone="forest" tall label="Cliente Vorah" />
          <div style={{ position: "absolute", left: "-22px", bottom: "30px", background: "var(--white)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", padding: "16px 18px", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ width: 40, height: 40, borderRadius: "var(--radius-pill)", background: "var(--mint-300)", display: "grid", placeItems: "center", fontSize: "20px" }}>📈</span>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px", color: "var(--charcoal-900)", lineHeight: 1 }}>+38%</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "var(--ink-500)" }}>vendas no trimestre</div>
            </div>
          </div>
        </div>
      </div>

      {/* pricing band */}
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "0 28px 64px" }}>
        <div style={{ background: "var(--charcoal-900)", borderRadius: "var(--radius-xl)", padding: "30px 36px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
          <div>
            <VKHeroBadge tone="dark">Planos</VKHeroBadge>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "28px", color: "var(--cream-50)", marginTop: "12px", lineHeight: 1.1 }}>
              A partir de <span style={{ color: "var(--amber-500)" }}>R$ 1.599,00</span>/mês
            </div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "15px", color: "var(--stone-400)", marginTop: "6px" }}>
              Pacotes de acordo com a sua demanda e o estágio da sua empresa.
            </div>
          </div>
          <VKHeroBtn as="a" href="#contato">Ver pacotes</VKHeroBtn>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ value, label }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "30px", color: "var(--charcoal-900)", lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--ink-500)", marginTop: "5px" }}>{label}</div>
    </div>
  );
}

/* Reusable on-brand image placeholder */
function PhotoPanel({ tone = "teal", label = "", tall = false }) {
  const bg = { teal: "var(--teal-800)", forest: "var(--forest-700)", cocoa: "var(--cocoa-700)", amber: "var(--amber-500)" }[tone] || "var(--teal-800)";
  return (
    <div style={{ position: "relative", background: bg, borderRadius: "var(--radius-xl)", aspectRatio: tall ? "4 / 5" : "4 / 3", overflow: "hidden", boxShadow: "var(--shadow-md)" }}>
      <img src="../../assets/mark-symbol-amber.svg" alt="" aria-hidden="true" style={{ position: "absolute", right: "-40px", bottom: "-40px", width: "200px", opacity: 0.18 }} />
      <span style={{ position: "absolute", left: "18px", bottom: "16px", fontFamily: "var(--font-sans)", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(250,247,241,0.6)" }}>{label || "imagem"}</span>
    </div>
  );
}

window.VK = Object.assign(window.VK || {}, { Hero, PhotoPanel });
