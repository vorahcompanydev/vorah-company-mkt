/* Vorah Company — contact form (interactive, fake submit) */
const { Input: VKInput, Textarea: VKTextarea, Select: VKSelect, Button: VKContactBtn } = window.VorahCompanyDesignSystem_0977e7;

function Contact() {
  const [form, setForm] = React.useState({ nome: "", telefone: "", email: "", servico: "Gestão de redes sociais", msg: "" });
  const [sent, setSent] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.nome.trim()) err.nome = "Informe seu nome";
    if (!form.telefone.trim()) err.telefone = "Informe seu telefone";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) err.email = "E-mail inválido";
    setErrors(err);
    if (Object.keys(err).length === 0) setSent(true);
  };

  return (
    <section id="contato" style={{ background: "var(--teal-800)", position: "relative", overflow: "hidden" }}>
      <img src="../../assets/mark-symbol-amber.svg" alt="" aria-hidden="true" style={{ position: "absolute", left: "-70px", bottom: "-70px", width: "300px", opacity: 0.12 }} />
      <div className="vk-contact" style={{ position: "relative", maxWidth: "var(--container-lg)", margin: "0 auto", padding: "88px 28px", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "52px", alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "14px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--amber-500)", marginBottom: "16px" }}>
            Entre em contato
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(30px,3.6vw,46px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: "var(--cream-50)", margin: "0 0 18px", textWrap: "balance" }}>
            Vamos construir o seu crescimento, a quatro mãos.
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "17px", lineHeight: 1.6, color: "rgba(250,247,241,0.8)", margin: 0 }}>
            Atendimento 100% online e 100% humano. Conte um pouco sobre o seu negócio e retornamos com um plano sob medida.
          </p>
        </div>

        <div style={{ background: "var(--cream-50)", borderRadius: "var(--radius-xl)", padding: "32px", boxShadow: "var(--shadow-lg)" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "30px 10px" }}>
              <div style={{ width: 60, height: 60, borderRadius: "var(--radius-pill)", background: "var(--mint-300)", display: "grid", placeItems: "center", margin: "0 auto 18px", fontSize: "28px" }}>✓</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "26px", color: "var(--charcoal-900)", margin: "0 0 8px" }}>Recebido, {form.nome.split(" ")[0] || "tudo certo"}!</h3>
              <p style={{ fontFamily: "var(--font-sans)", color: "var(--ink-500)", margin: 0 }}>Em breve entramos em contato. Obrigado pela confiança.</p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: "grid", gap: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <VKInput label="Nome e Sobrenome*" placeholder="Seu nome" value={form.nome} onChange={set("nome")} error={errors.nome} />
                <VKInput label="Telefone*" placeholder="(11) 90000-0000" value={form.telefone} onChange={set("telefone")} error={errors.telefone} />
              </div>
              <VKInput label="E-mail*" type="email" placeholder="voce@empresa.com" value={form.email} onChange={set("email")} error={errors.email} />
              <VKSelect label="Serviço de interesse" value={form.servico} onChange={set("servico")}>
                <option>Gestão de redes sociais</option>
                <option>Site / landing page</option>
                <option>Identidade visual</option>
                <option>Diagnóstico de perfil</option>
                <option>Consultoria</option>
              </VKSelect>
              <VKTextarea label="Mensagem" rows={3} placeholder="Conte um pouco sobre o seu negócio…" value={form.msg} onChange={set("msg")} />
              <VKContactBtn type="submit" size="lg" full>Enviar</VKContactBtn>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

window.VK = Object.assign(window.VK || {}, { Contact });
