import { useDispatch, useSelector } from 'react-redux';
import { addOrderRequest, getCartProducts } from '../../../redux/cartRedux';
import {
  getProductsByIds,
  loadProductsByIdsRequest,
} from '../../../redux/productsRedux';
import CartItemsList from '../../features/CartItemsList/CartItemsList';
import {  Button, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import { NavLink} from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();

  const productsId = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems')).map((p) => p.id)
    : [];

  useEffect(() => {
    dispatch(loadProductsByIdsRequest(productsId));
  }, [dispatch]);

  const productsIdAdditionalInfo = useSelector(getCartProducts);
  const products = useSelector((state) => getProductsByIds(state, productsId));
  const productsWithCount = products.map((product) => ({
    ...product,
    quantity: productsIdAdditionalInfo.find((p) => product.id === p.id)
      .quantity,
  }));

  return (
    <div>
      {productsId.length > 0 ? (
        <div>
          <p>
            Jeśli masz jakieś szczególne wymagania do któregoś z produktu, dodaj
            je w uwagach. Skontaktujemy się z Tobą mailowo w tej sprawie!
          </p>
          <CartItemsList products={productsWithCount} />

          <Button as={NavLink} to="/cart/summary">
            Dalej &#10095;
          </Button>
        </div>
      ) : (
        <Row className="justify-content-center">
          <Col xs="auto">Koszyk jest pusty...</Col>
        </Row>
      )}
    </div>
  );
};

export default Cart;
