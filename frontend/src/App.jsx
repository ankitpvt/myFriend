// import React, { useState, useEffect } from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EnterNumberPage from "./components/EnterNumberPage";
import Fetchjocke from "./components/Fetchjocke";
import Yash from "./components/Yash";
import Pranav from "./components/Pranav";
import Jid from "./components/Jid";
import Vishal from "./components/Vishal";
const App = () => {
  return (
    <>
    <Router>
      <div className="app">
        {/* <h1>Cartoon Jokes Generator</h1> */}
        <Routes>
          <Route path="/" element={<EnterNumberPage />} />
          <Route path="yash" element={<Yash/>}/>
          <Route path="/yes" element={<Fetchjocke/>} />
          <Route path="/pranav" element={<Pranav/>}/>
          <Route path="/jid" element={<Jid/>}/>
          <Route path="/vishal" element={<Vishal/>}/>
        </Routes>
      </div>
    </Router>
    
    </>
  );
};

export default App;
