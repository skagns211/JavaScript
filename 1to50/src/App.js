import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enter from "./page/Enter";
import Main from "./page/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Enter />} />
        <Route path="/game" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
