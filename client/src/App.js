
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Cart from "./components/pages/Cart/Cart";
import SingleProductPage from "./components/pages/SingleProductPage/SingleProductPage";
import NotFound from "./components/pages/NotFound/NotFound";
import CartSummary from "./components/pages/CartSummary/CartSummary";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/summary" element={<CartSummary />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </MainLayout>
  )
}

export default App;
