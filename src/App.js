import { Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation';
import Test from './Components/test/Test';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Test game="indie" />} />
        <Route path='/test2' element={<Test game="action" />} />
        <Route path='/test3' element={<Test game="strategy" />} />
        <Route path='/test4' element={<Test game="shooter" />} />
      </Routes>

    </div>
  );
}

export default App;
