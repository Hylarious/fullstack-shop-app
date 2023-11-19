import { Button, Col, Image, Row } from 'react-bootstrap';
import { addItemToCart } from '../../../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Product = (props) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addItemToCart(props.id));
  };

  console.log(props);
  return (
    <Col xs="3">
      <h2>{props.name}</h2>
      <Image src={`/${props.photos[0].url}`} rounded fluid thumbnail />
      <Button onClick={handleAddToCart}>Dodaj do koszyka</Button>
    </Col>
  );
};

export default Product;