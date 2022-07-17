import { Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation';
import Page from './Components/pages/Page';
function App() {
  return (
    <div className="App">
      <div className="AppWrapper">
        <Navigation />
        <Routes>
          <Route path='/' element={<Page game="indie" />} />
          <Route path='/indie' element={<Page game="indie" />} />
          <Route path='/action' element={<Page game="action" />} />
          <Route path='/strategy' element={<Page game="strategy" />} />
          <Route path='/shooter' element={<Page game="shooter" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
