import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/reset.css";
import "./styles/global.scss";

import { Home } from "./pages/Home";
import { BlogPage } from "./pages/BlogPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home lang={lang} onLang={setLang} />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
