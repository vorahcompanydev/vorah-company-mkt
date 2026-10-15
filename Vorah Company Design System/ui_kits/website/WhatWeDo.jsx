/* Vorah Company — "O que fazemos" (numbered) + "O que oferecemos" (services) */
const { SectionHeading: VKWWDHeading, Button: VKWWDBtn, Badge: VKWWDBadge } = window.VorahCompanyDesignSystem_0977e7;

function WhatWeDo() {
  const outcomes = [
    ["01", "Aumentar sua autoridade online"],
    ["02", "Atrair novos clientes com consistência"],
    ["03", "Postar com mais estratégia e frequência"],
    ["04", "Melhorar o posicionamento da sua marca"],
    ["05", "Elevar o faturamento com conteúdo estratégico"],
  ];
  const services = [
    "Análise completa do seu perfil",
    "Conteúdo baseado em metas",
    "Acompanhamento de métricas",
    "Reuniões de alinhamento",
    "Relatórios de desempenho claros",
    "Curadoria de conteúdo relevante",
    "Modelos visuais para postagens",
    "Criação de posts com legendas",
  ];
  return (
    <section id="servicos" style={{ background: "var(--cream-50)" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "88px 28px" }}>
        <VKWWDHeading
          eyebrow="O que fazemos"
          title="Gestão estratégica de redes sociais com foco em crescimento comercial real"
          intro="Atendemos empresas em todo o Brasil."
          maxWidth={720}
        />

        <div className="vk-wwd" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", marginTop: "48px", alignItems: "start" }}>
          <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
            {outcomes.map(([num, text]) => (
              <li key={num} style={{ display: "flex", gap: "20px", alignItems: "center", padding: "18px 0", borderBottom: "1px solid var(--stone-200)" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "26px", color: "var(--amber-600)", width: "46px", flex: "none" }}>{num}</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "21px", color: "var(--charcoal-900)", lineHeight: 1.25 }}>{text}</span>
              </li>
            ))}
          </ol>

          <div style={{ background: "var(--white)", borderRadius: "var(--radius-xl)", padding: "32px", boxShadow: "var(--shadow-sm)", border: "1px solid var(--color-border)" }}>
            <VKWWDBadge tone="forest">O que oferecemos</VKWWDBadge>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "16px", lineHeight: 1.6, color: "var(--ink-500)", margin: "14px 0 22px" }}>
              Unimos estratégia + execução, com foco em resultados. Um processo claro, colaborativo e pensado para gerar valor real para o seu negócio.
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 18px" }}>
              {services.map((s) => (
                <li key={s} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontFamily: "var(--font-sans)", fontSize: "14.5px", color: "var(--charcoal-900)", lineHeight: 1.4 }}>
                  <span style={{ color: "var(--amber-600)", fontWeight: 700, flex: "none" }}>✦</span>
                  {s}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "26px" }}>
              <VKWWDBtn as="a" href="#contato" full>Entrar em contato</VKWWDBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.VK = Object.assign(window.VK || {}, { WhatWeDo });
