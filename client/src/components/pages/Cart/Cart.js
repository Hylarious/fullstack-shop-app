import { useSelector } from "react-redux";
import { getCartProducts } from "../../../redux/cartRedux";
import { getProductsByIds } from "../../../redux/productsRedux";
import CartItemsList from "../../features/CartItemsList/CartItemsList";
import OrderForm from "../../features/OrderForm/OrderForm";

const Cart = () => {

  const productsId = useSelector(getCartProducts)
  const products = useSelector(state => getProductsByIds(state, productsId))

  const countProducts = productsId.reduce((acc, id) => {
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});
  const productsWithCount = products.map(product => ({
    ...product,
    count: countProducts[product.id],
  }));


  return <div>
    <CartItemsList products={productsWithCount} />
    <OrderForm />
  </div>;
};

export default Cart;
