import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from './pages/MainPage';
import { FavoritePage } from './pages/FavoritePage';
import { Navbar } from './features/Navbar/Navbar';

function App() {

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/favorite" element={<FavoritePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
