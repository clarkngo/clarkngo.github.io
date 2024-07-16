import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error/error-page";
import PokemonsPage from "./pokemons/PokemonsPage";
import ProjectsPage from "./projects/ProjectsPage";
import "./index.css";
import PathPage from "./path/PathPage";
import ChartPage from "./chart/ChartPage";
import NotesPage from "./notes/NotesPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
          <Route path="chart" element={<ChartPage />} />
          <Route path="path" element={<PathPage/>} />
          <Route path="pokedex" element={<PokemonsPage />} />
          <Route path="project" element={<ProjectsPage />} />
          <Route path="notes" element={<NotesPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
