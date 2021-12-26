import {
  Routes,
  Route
} from "react-router-dom";
import React from 'react';
import Multistepform from './components/Multistepform';
import "./App.css"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/"  element={<Multistepform />} />
      </Routes>
    </div>
  );
}

export default App;
