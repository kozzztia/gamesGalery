import { Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation';
import Test from './Components/test/Test';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Test game="indie" />} />
        <Route path='/action' element={<Test game="action" />} />
        <Route path='/strategy' element={<Test game="strategy" />} />
        <Route path='/shooter' element={<Test game="shooter" />} />
      </Routes>

    </div>
  );
}

export default App;
