import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import System from "./component/System";
import Style from "./component/Styled";
import Stysys from "./component/Stysys";
import Form from "./component/Form";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<System />} />
          <Route path="/style" element={<Style />} />
          <Route path="/Stysys" element={<Stysys />} />
          <Route path="/form" element={<Form />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
