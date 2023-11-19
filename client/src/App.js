import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadProductRequest } from "./redux/productsRedux";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Cart from "./components/pages/Cart/Cart";
import SingleProductPage from "./components/pages/SingleProductPage/SingleProductPage";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadProductRequest())
  }, [dispatch])

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
      </Routes>
    </MainLayout>
  )
}

export default App;
