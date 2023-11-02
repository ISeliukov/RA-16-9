import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./engine/Home.js";
import { DriftPage } from "./engine/Drift.js";
import { TimeAttackPage } from "./engine/TimeAttack.js";
import { ForzaPage } from "./engine/Forza.js";
import { Menu } from "./engine/Menu.js";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drift" element={<DriftPage />} />
        <Route path="/timeattack" element={<TimeAttackPage />} />
        <Route path="/forza" element={<ForzaPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
