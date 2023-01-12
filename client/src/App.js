import { Route, Routes } from 'react-router-dom'
import Order from './pages/Order';
import Home from './pages/Home';
import Header from './pages/Header';


function App() {
  return (
    <div>
    <Header />  
      <Routes>
        <Route path="/order" element={<Order />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
