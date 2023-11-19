import { useSelector } from "react-redux";
import { getCartProducts } from "../../../redux/cartRedux";
import { getProductsByIds } from "../../../redux/productsRedux";
import { useMemo } from "react";
import CartItemsList from "../../features/CartItemsList/CartItemsList";

const Cart = () => {

  const productsId = useSelector(getCartProducts)
  const products = useSelector(state => getProductsByIds(state, productsId))
  return <div>
    <CartItemsList products={products}/>
  </div>;
};

export default Cart;
