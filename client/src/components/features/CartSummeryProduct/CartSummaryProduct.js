import { Col, Row, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProductById,
  loadProductsByIdsRequest,
} from '../../../redux/productsRedux';
import { useEffect } from 'react';

const CartSummaryProduct = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductsByIdsRequest([id]));
  }, [dispatch]);

  const product = useSelector((state) => getProductById(state, id));
  const productWithInfo = JSON.parse(localStorage.getItem('cartItems')).find(
    (p) => p.id === id,
  );

  return (
    <div>
      <Row>
        <Col sm={12} md={9}>
          <Stack className="my-3" direction="horizontal" gap={3}>
            <img
              width="100px"
              src={`/${product.photos[0].url}`}
              alt={product.name}
            />
            <div >
              <h5>{product.name}</h5></div>
            <div className="ms-auto" >Szt.: {productWithInfo.quantity}</div>
            <div> Cena: {product.price * productWithInfo.quantity} zł</div>
          </Stack>
        </Col>
        {productWithInfo.description && (
          <Col>
            <h5>Twoje uwagi: </h5>
            <p>{productWithInfo.description}</p>
          </Col>
        )}
      </Row>
      <hr/>
    </div>
  );
};
export default CartSummaryProduct;
