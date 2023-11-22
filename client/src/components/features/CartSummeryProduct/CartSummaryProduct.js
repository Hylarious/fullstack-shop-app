import { Row, Stack } from 'react-bootstrap';
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
  console.log(productWithInfo);

  return (
    <div>
      <Row>
        <Stack className="my-3" direction="horizontal" gap={3}>
          <img width="100px" src={`/${product.photos[0].url}`} />
          <div>{product.name}</div>
          <div>{productWithInfo.quantity}</div>
          <div> Cena: {product.price * productWithInfo.quantity} zł</div>
        </Stack>
      </Row>

      {productWithInfo.description && (
        <Row>
          <h5>Twoje uwagi: </h5>
          <p>{productWithInfo.description}</p>
        </Row>
      )}
    </div>
  );
};
export default CartSummaryProduct;
