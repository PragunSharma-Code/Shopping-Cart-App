import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Cart from './pages/Cart'
import Checkout from "./pages/Checkout";

const App = () => {
  return (

    <div>
       <div className="bg-slate-900">
          <Navbar/>
        </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;
