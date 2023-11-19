import { Button, Col, Image, Row } from 'react-bootstrap';
import { addItemToCart } from '../../../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';


const Product = (props) => {
  const dispatch = useDispatch();
  const redirect = useNavigate()
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addItemToCart(props.id));
  };

  return (
    <Col xs="3">
      <h2 >{props.name}</h2>
      <Image src={`/${props.photos[0].url}`} rounded fluid thumbnail />
      <Button onClick={handleAddToCart}>Dodaj do koszyka</Button>
      <Button as={NavLink} to={`/product/${props.id}`}>Zobacz więcej</Button>
    </Col>
  );
};

export default Product;