import { useDispatch, useSelector } from 'react-redux';
import { addOrderRequest, getCartProducts } from '../../../redux/cartRedux';
import { getProductsByIds } from '../../../redux/productsRedux';
import CartItemsList from '../../features/CartItemsList/CartItemsList';
import OrderForm from '../../features/OrderForm/OrderForm';
import { Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productsIdWithCount = useSelector(getCartProducts);
  const productsId = productsIdWithCount.map((p) => p.id);
  const products = useSelector((state) => getProductsByIds(state, productsId));

  const [orderSent, setOrderSent] = useState(false);

  const productsWithCount = products.map((product) => ({
    ...product,
    quantity: productsIdWithCount.find((p) => product.id === p.id).quantity,
  }));

  console.log(productsWithCount);
  const sendOrder = (orderData) => {
    if (productsId && orderData)
      dispatch(
        addOrderRequest({
          orderData: { ...orderData },
          products: productsIdWithCount,
        }),
      );
    setOrderSent(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div>
      {orderSent && (
        <Alert variant="success">
          <Alert.Heading>
            Dziękujemy, twoje zamówienie zostało wysłane!
          </Alert.Heading>
        </Alert>
      )}

      <CartItemsList products={productsWithCount} />
      
      <OrderForm action={sendOrder} />
    </div>
  );
};

export default Cart;
