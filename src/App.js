import { Routes,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import MainHome from './conponents/MainHome';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<MainHome/>} > </Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
