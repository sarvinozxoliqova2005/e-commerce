// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./pages/home/HomePages";
import CartPage from "./pages/cart/CartPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePages />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
