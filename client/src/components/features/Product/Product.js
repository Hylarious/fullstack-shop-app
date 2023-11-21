import { Button, ButtonGroup, Card, Col, Image, Row } from 'react-bootstrap';
import { addItemToCart } from '../../../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const Product = (props) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addItemToCart(props.id));
  };

  return (
    <Col sm="4">
      <Card className="my-2">
        <NavLink to={`/product/${props.id}`}>
          <img src={`/${props.photos[0].url}`} width='100%' height='300vh' />
        </NavLink>
        <h4>{props.name}</h4>
        <p> {props.price} zł</p>
        <ButtonGroup>
          <Button onClick={handleAddToCart}>Dodaj do koszyka</Button>
          <Button as={NavLink} to={`/product/${props.id}`}>
            Zobacz więcej
          </Button>
        </ButtonGroup>
      </Card>
    </Col>
  );
};

export default Product;
