import {  } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './app.css';
import SearchAppBar from './components/AppBar';
import Home from './pages/Home';
import Python from './pages/Python';
import Univ1001 from './pages/Univ1001';
import Java1 from './pages/Java1';
import Java2 from './pages/Java2';
import Web1 from './pages/Web1';
import Database1 from './pages/Database1';
import CompSystems from './pages/CompSystems';
import EnglComp from './pages/EnglComp';
// import Foot from './components/Foot';


import {BrowserRouter, Routes, Route, } from 'react-router-dom'



function App() {

  return (
    <BrowserRouter>
      <SearchAppBar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/python" element={<Python />} /> 
        <Route exact path="/java1" element={<Java1 />} /> 
        <Route exact path="/java2" element={<Java2 />} />
        <Route exact path="/web1" element={<Web1 />} />
        <Route exact path="/univ" element={<Univ1001 />} />
        <Route exact path="/database1" element={<Database1 />} />
        <Route exact path="/compSystems" element={<CompSystems />} />
        <Route exact path="/englcomp" element={<EnglComp />} />
      </Routes>
      {/* <Foot /> */}

    </BrowserRouter>
    
  );
}

export default App;
