import { Button, ButtonGroup, Card, Col, Image, Row } from 'react-bootstrap';
import { addItemToCart } from '../../../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const Product = (props) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addItemToCart(props.id, 1));
  };

  return (
    <Col sm="6" md="4" className="my-2">
      <Card className="card mb-5">
        <NavLink to={`/product/${props.id}`}>
          <img src={`/${props.photos[0].url}`} width="100%" height="300vh" />
        </NavLink>
        <Card.Body>
          <Card.Title>
            {' '}
            <h4>{props.name}</h4>
          </Card.Title>
          <Card.Text>
            <p> {props.price} zł</p>
          </Card.Text>
          <div className="d-flex justify-content-center">
          <Button className="me-2" onClick={handleAddToCart}>
            Dodaj do koszyka
          </Button>
          <Button as={NavLink} to={`/product/${props.id}`}>
            Zobacz więcej
          </Button>
        </div>
        </Card.Body>

        
      </Card>
    </Col>
  );
};

export default Product;
