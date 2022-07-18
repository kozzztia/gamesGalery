import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation';
import Page from './Components/pages/Page';

function App() {
  return (
    <div className="App">
      <div className="AppWrapper">
        <Navigation />
        <Routes>
          <Route path='/' element={<Page game="indie" page={1} />} />
          <Route path='/indie' element={<Page game="indie" page={1} />} />
          <Route path='/action' element={<Page game="action" page={1} />} />
          <Route path='/strategy' element={<Page game="strategy" page={1} />} />
          <Route path='/shooter' element={<Page game="shooter" page={1} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
