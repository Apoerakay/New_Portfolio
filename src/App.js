import { Home } from './Pages/home';
import Portfolio from './Pages/photography';
import { Webpages } from './Pages/websites';
import { Route,Routes, BrowserRouter } from "react-router-dom";
import React from 'react';
import './App.css';

function App() {
  return (
    <BrowserRouter>
<Routes>

<Route path='/' element={<Home/>}></Route>
<Route path='/photography' element={<Portfolio/>}></Route>
<Route path='/websites' element={<Webpages/>}></Route>

</Routes>
</BrowserRouter>

  );
}

export default App;
