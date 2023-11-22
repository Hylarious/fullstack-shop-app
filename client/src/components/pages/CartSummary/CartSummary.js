import { useDispatch, useSelector } from 'react-redux';
import OrderForm from '../../features/OrderForm/OrderForm';
import { addOrderRequest, getCartProducts } from '../../../redux/cartRedux';
import CartSummaryProduct from '../../features/CartSummeryProduct/CartSummaryProduct';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CartSummary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productsIdWithInfo = useSelector(getCartProducts);
  const [orderSent, setOrderSent] = useState(false);

  const sendOrder = (orderData) => {
    if (productsIdWithInfo && orderData)
      dispatch(
        addOrderRequest({
          orderData: { ...orderData },
          products: productsIdWithInfo,
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
      {productsIdWithInfo.map((p) => (
        <CartSummaryProduct key={p.id} id={p.id} />
      ))}
      <OrderForm action={sendOrder} />
    </div>
  );
};
export default CartSummary;
