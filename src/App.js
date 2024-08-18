import { Home } from './Pages/home';
import { Route,Routes, BrowserRouter } from "react-router-dom";
import React from 'react';
import './App.css';

function App() {
  return (
    <BrowserRouter>
<Routes>

<Route path='/' element={<Home/>}></Route>

</Routes>
</BrowserRouter>

  );
}

export default App;
