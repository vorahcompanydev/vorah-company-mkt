/* Vorah Company — page composition */
function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { Nav, Hero, Differentials, WhatWeDo, Results, About, Testimonials, Contact, Footer } = window.VK;
  return (
    <div>
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Differentials />
      <WhatWeDo />
      <Results />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
