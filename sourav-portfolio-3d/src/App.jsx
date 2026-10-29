import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Asterisk } from "lucide-react";
import { site } from "./data/site";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("sourav-theme") || "dark",
  );
  const [palette, setPalette] = useState(
    () => localStorage.getItem("sourav-palette") || "cyan",
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("sourav-theme", theme);
  }, [theme]);
  useEffect(() => {
    document.documentElement.dataset.palette = palette;
    localStorage.setItem("sourav-palette", palette);
  }, [palette]);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Sourav Sahoo | Full Stack Developer (MERN) | Odisha</title>
        <meta
          name="description"
          content="Full Stack Developer building reliable, user-friendly web products with React.js, Node.js, Express.js and MongoDB. Based in Puri, Odisha."
        />
        <meta
          property="og:title"
          content="Sourav Sahoo — Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Building reliable, user-friendly web products with the MERN stack."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: site.name,
            jobTitle: site.role,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Puri",
              addressRegion: "Odisha",
              addressCountry: "IN",
            },
            email: site.email,
            url: site.github,
            sameAs: [site.github, site.linkedin],
          })}
        </script>
      </Helmet>
      <Navbar
        theme={theme}
        toggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        palette={palette}
        setPalette={setPalette}
      />
      <main id="main">
        <Hero />
        <div className="ticker" aria-label="Technology stack">
          <div className="ticker-track">
            {Array.from({ length: 2 }, (_, i) => (
              <div className="ticker-set" key={i}>
                {[
                  "REACT.JS",
                  "NODE.JS",
                  "EXPRESS.JS",
                  "MONGODB",
                  "REST APIS",
                  "JWT AUTH",
                  "TAILWIND CSS",
                  "GIT & GITHUB",
                ].map((x, j) => (
                  <span key={x}>
                    <Asterisk size={13} />
                    {x}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </HelmetProvider>
  );
}

export default App;
