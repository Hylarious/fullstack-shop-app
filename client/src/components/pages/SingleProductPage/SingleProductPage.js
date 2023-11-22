import {
  Alert,
  Button,
  Carousel,
  Col,
  ProgressBar,
  Row,
  Spinner,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getProductById,
  loadProductsByIdsRequest,
} from '../../../redux/productsRedux';
import { useEffect, useState } from 'react';
import QuantityInput from '../../features/QuantityInput/QuantityInput';
import { addItemToCart } from '../../../redux/cartRedux';

const SingleProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadProductsByIdsRequest([id]));
  }, [dispatch, id]);

  const product = useSelector((state) => getProductById(state, id));
  const [count, setCount] = useState(1);
  const [productAdded, setProductAdded] = useState(false);

  const handleCount = (_, newCount) => {
    setCount(newCount);
  };
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addItemToCart(id, count));
    setProductAdded(true);
    setTimeout(() => {
      setProductAdded(false);
    }, 3000);
  };

  return (
    <div>
      {productAdded && (
        <Alert variant="success">
          <Alert.Heading>Dodano do koszyka!</Alert.Heading>
        </Alert>
      )}
      {product ? (
        <Row>
          <Col xs={12} md={6}>
            <Carousel>
              {product.photos.map((photo) => (
                <Carousel.Item key={photo.id}>
                  <img src={`/${photo.url}`} width="100%" height="500vh" />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col xs={12} md={6}>
            <h2>{product.name}</h2>
            <h4>{product.description}</h4>
            <p>{product.price} zł</p>
            <QuantityInput
              quantity={count}
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
