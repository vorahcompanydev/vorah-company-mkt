/* Vorah Company — site nav */
const { Logo: VKLogo, Button: VKButton } = window.VorahCompanyDesignSystem_0977e7;

function Nav({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Home", "#top"],
    ["Serviços", "#servicos"],
    ["Sobre", "#sobre"],
    ["Contato", "#contato"],
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(250,247,241,0.86)" : "transparent",
        backdropFilter: scrolled ? "saturate(140%) blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        transition: "background var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          padding: "16px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#top" style={{ textDecoration: "none" }}><VKLogo size={26} tone="ink" /></a>

        <nav className="vk-desktop-nav" style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "15px",
                color: "var(--charcoal-900)",
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          ))}
          <VKButton as="a" href="#contato" size="sm">Entrar em contato</VKButton>
        </nav>

        <button
          className="vk-mobile-toggle"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            display: "none",
            border: "none",
            background: "var(--charcoal-900)",
            color: "var(--cream-50)",
            width: 44,
            height: 44,
            borderRadius: "var(--radius-pill)",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          {menuOpen ? "✕" : "≡"}
        </button>
      </div>

      {menuOpen && (
        <div
          className="vk-mobile-menu"
          style={{
            display: "none",
            flexDirection: "column",
            gap: "4px",
            padding: "8px 28px 22px",
            background: "var(--cream-50)",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{ padding: "12px 0", fontWeight: 600, fontSize: "17px", color: "var(--charcoal-900)", textDecoration: "none", borderBottom: "1px solid var(--stone-100)" }}
            >
              {label}
            </a>
          ))}
          <div style={{ marginTop: "14px" }}>
            <VKButton as="a" href="#contato" full onClick={() => setMenuOpen(false)}>Entrar em contato</VKButton>
          </div>
        </div>
      )}
    </header>
  );
}

window.VK = Object.assign(window.VK || {}, { Nav });
