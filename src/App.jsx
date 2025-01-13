import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//LAYOUTS
import DefaultLayout from "./layouts/defaultLayout";
//PAGES
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MovieIndexPage from "./pages/MovieIndexPage";
import ShowPage from "./pages/ShowPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout} path="/">
          <Route index Component={HomePage} />
          <Route path="about" Component={AboutPage} />
          <Route path="movie">
            <Route index Component={MovieIndexPage} />
            <Route path=":id" Component={ShowPage} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
