import {
  Button,
  Carousel,
  Col,
  ProgressBar,
  Row,
  Spinner,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../redux/productsRedux';
import { useState } from 'react';
import QuantityInput from '../../features/QuantityInput/QuantityInput';
import { addItemToCart } from '../../../redux/cartRedux';

const SingleProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => getProductById(state, id));
  const [count, setCount] = useState(1);

  const handleCount = (_, count) => {
    setCount(count);
  };
  const handleAddToCart = (e) => {
    e.preventDefault();
    for (let i = 0; i <= count; i++) {
      dispatch(addItemToCart(id));
    }
  };

  console.log(product);
  return (
    <div>
      {product ? (
        <Row>
          <Col xs="6">
            <Carousel>
              {product.photos.map((photo) => (
                <Carousel.Item key={photo.id}>
                  <img src={`/${photo.url}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col xs="6">
            <h2>{product.name}</h2>
            <h4>{product.description}</h4>
            <p>{product.price} zł</p>
            <QuantityInput
              count={count}
              countUp={handleCount}
              countDown={handleCount}
            />
            <Button onClick={handleAddToCart}>Dodaj do koszyka</Button>
          </Col>
        </Row>
      ) : (
        <ProgressBar now={60} />
      )}
    </div>
  );
};

export default SingleProductPage;
