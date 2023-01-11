import { Route, Routes } from 'react-router-dom'
import Order from './Order';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
