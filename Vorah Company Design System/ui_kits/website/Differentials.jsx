/* Vorah Company — "Nosso Diferencial" */
const { Card: VKDiffCard, SectionHeading: VKDiffHeading } = window.VorahCompanyDesignSystem_0977e7;

function Differentials() {
  const items = [
    ["💬", "Transparência total", "Feedbacks objetivos, diálogo aberto e alinhamento constante."],
    ["🤝", "Parceria de verdade", "Trabalhamos em equipe — aqui, o resultado é construído a quatro mãos."],
    ["🧭", "Processos definidos", "Cada etapa do trabalho é clara, organizada e feita sob medida."],
    ["🎯", "Foco em vendas", "Conteúdo bonito é bom, mas conteúdo com propósito é o que traz faturamento."],
  ];
  return (
    <section style={{ background: "var(--white)" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "88px 28px" }}>
        <VKDiffHeading
          eyebrow="Nosso diferencial"
          title="Mais do que “fazer post” — guiamos o seu crescimento"
          intro="Na Vorah, nós guiamos o cliente com clareza, colaboramos com inteligência e construímos juntos caminhos de crescimento. Atendimento 100% online e 100% humano."
          maxWidth={680}
        />
        <div className="vk-diff-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "18px", marginTop: "48px" }}>
          {items.map(([emoji, title, body]) => (
            <VKDiffCard key={title} tone="cream" hover>
              <div style={{ width: 52, height: 52, borderRadius: "var(--radius-md)", background: "var(--white)", display: "grid", placeItems: "center", fontSize: "26px", boxShadow: "var(--shadow-xs)" }}>{emoji}</div>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "20px", color: "var(--charcoal-900)", margin: "18px 0 8px" }}>{title}</h4>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "14.5px", lineHeight: 1.55, color: "var(--ink-500)", margin: 0 }}>{body}</p>
            </VKDiffCard>
          ))}
        </div>
      </div>
    </section>
  );
}

window.VK = Object.assign(window.VK || {}, { Differentials });
