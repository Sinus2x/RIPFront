import './App.css';
import { AlbumPage } from "./pages/AlbumPage";
import { HomePage } from "./pages/HomePage";
import React from "react";
import {Route, Routes} from "react-router";

function App() {
  return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/albums/:id" element={<AlbumPage />} />
                <Route path="*" element={<h1>NOT FOUND!</h1>} />
            </Routes>
        </div>
  );
}
export default App;



