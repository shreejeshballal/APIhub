import React, { useState, useEffect } from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import JokeGen from "./components/JokeGen/JokeGen";
import Error from "./components/Error/Error";
import QuoteGen from "./components/QuoteGen/QuoteGen";
import TriviaGen from "./components/TriviaGen/TriviaGen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Particle from "./UI/UX/Particles/Particle";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <BrowserRouter>
      <Navbar onToggle={toggle ? () => setToggle(false) : () => setToggle(true)} toggle={toggle} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home onToggle={()=>setToggle(true)} />}
        ></Route>
        <Route path="/quote" element={<QuoteGen />}></Route>
        <Route path="/joke" element={<JokeGen />}></Route>
        <Route path="/trivia" element={<TriviaGen />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      {/* <Footer /> */}
      <Particle />
    </BrowserRouter>
  );
}

export default App;
