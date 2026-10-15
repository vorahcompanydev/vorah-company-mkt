/* Vorah Company — "Sobre nós" */
const { Button: VKAboutBtn } = window.VorahCompanyDesignSystem_0977e7;
const { PhotoPanel: VKPhotoPanel } = window.VK;

function About() {
  return (
    <section id="sobre" style={{ background: "var(--white)" }}>
      <div className="vk-about" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "88px 28px", display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: "56px", alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <VKPhotoPanel tone="cocoa" tall label="Equipe Vorah" />
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "14px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--amber-700)", marginBottom: "16px" }}>
            Sobre nós
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(30px, 3.6vw, 46px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: "var(--charcoal-900)", margin: 0, textWrap: "balance" }}>
            Conectamos marcas e pessoas com intenção.
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "17px", lineHeight: 1.65, color: "var(--ink-500)", margin: "22px 0 14px", maxWidth: "560px" }}>
            Somos a Vorah, uma empresa especializada em comunicação estratégica e marketing digital com foco comercial.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "17px", lineHeight: 1.65, color: "var(--ink-500)", margin: "0 0 30px", maxWidth: "560px" }}>
            Acreditamos que vender é consequência de um bom posicionamento, processos bem definidos e uma presença online verdadeira. Nosso objetivo é simples: ajudar você a vender mais e se posicionar melhor no mercado.
          </p>
          <VKAboutBtn as="a" href="#contato" size="lg">Vamos conversar</VKAboutBtn>
        </div>
      </div>
    </section>
  );
}

window.VK = Object.assign(window.VK || {}, { About });
