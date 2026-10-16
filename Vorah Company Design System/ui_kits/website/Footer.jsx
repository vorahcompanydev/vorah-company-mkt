/* Vorah Company — footer */
const { Logo: VKFootLogo } = window.VorahCompanyDesignSystem_0977e7;

function Footer() {
  return (
    <footer style={{ background: "var(--charcoal-900)", color: "var(--cream-50)" }}>
      <div className="vk-foot" style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "64px 28px 32px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "40px" }}>
        <div>
          <VKFootLogo size={26} tone="cream" />
          <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "19px", color: "var(--cream-50)", margin: "20px 0 0", maxWidth: "320px" }}>
            Conectamos marcas e pessoas com intenção.
          </p>
        </div>
        <div>
          <FootHeading>Navegação</FootHeading>
          <FootLink href="#top">Home</FootLink>
          <FootLink href="#servicos">Serviços</FootLink>
          <FootLink href="#sobre">Sobre</FootLink>
          <FootLink href="#contato">Contato</FootLink>
        </div>
        <div>
          <FootHeading>Contato</FootHeading>
          <FootLine>Florianópolis, SC</FootLine>
          <FootLine>(47) 99795-7541</FootLine>
          <FootLine>contato@vorahcompany.com</FootLine>
          <div style={{ display: "flex", gap: "16px", marginTop: "14px" }}>
            <FootLink href="#" inline>Instagram</FootLink>
            <FootLink href="#" inline>LinkedIn</FootLink>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid var(--color-border-dark)" }}>
        <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "20px 28px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--stone-400)" }}>
          <span>© 2026 Vorah Company.</span>
          <span style={{ display: "flex", gap: "20px" }}>
            <a href="#" style={{ color: "var(--stone-400)", textDecoration: "none" }}>Política de privacidade</a>
            <a href="#" style={{ color: "var(--stone-400)", textDecoration: "none" }}>Política de cookies</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FootHeading({ children }) {
  return <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--amber-500)", marginBottom: "16px" }}>{children}</div>;
}
function FootLink({ children, href, inline }) {
  return <a href={href} style={{ display: inline ? "inline" : "block", fontFamily: "var(--font-sans)", fontSize: "15px", color: "var(--cream-50)", textDecoration: "none", marginBottom: inline ? 0 : "10px" }}>{children}</a>;
}
function FootLine({ children }) {
  return <div style={{ fontFamily: "var(--font-sans)", fontSize: "15px", color: "rgba(250,247,241,0.78)", marginBottom: "10px" }}>{children}</div>;
}

window.VK = Object.assign(window.VK || {}, { Footer });
