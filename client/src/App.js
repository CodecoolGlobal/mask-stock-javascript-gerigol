import { Route, Routes } from 'react-router-dom'
import Order from './Order';
import Home from './pages/Home';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/order" element={<Order />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
