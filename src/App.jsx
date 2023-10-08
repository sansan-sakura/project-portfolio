import { Hero } from "./components/sections/Hero";
import { Tech } from "./components/sections/Tech";
import { Projects } from "./components/sections/Projects";
import { Blog } from "./components/sections/Blog";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

import "./styles/reset.css";
import "./styles/global.scss";
import "./styles/variables.scss";

function App() {
  return (
    <main>
      <Hero />
      <Tech />
      <Projects />
      <Blog />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;