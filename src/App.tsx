import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from './pages/MainPage';
import { FavoritePage } from './pages/FavoritePage';
import { Navbar } from './features/Navbar/Navbar';

function App() {

  const GET_ALL_ROCKETS = gql`
  query GetAllRockets {
    rockets {
      id
      description
      name
    }
  }
`;

  const { loading, error, data } = useQuery(GET_ALL_ROCKETS);

  console.log(loading, error, data)

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar/>
        {
          // data ? data.toString() : <> loading ...</>
        }
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/favorite" element={<FavoritePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
