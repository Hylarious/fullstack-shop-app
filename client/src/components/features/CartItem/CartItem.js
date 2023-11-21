import { Button, Form, InputGroup, Row, Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  addItemToCart,
  addOrderDescription,
  deleteItemsFormCart,
  deleteOrderDescription,
  productCountDown,
} from '../../../redux/cartRedux';
import QuantityInput from '../QuantityInput/QuantityInput';
import { useState } from 'react';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const productFormLocalCart = JSON.parse(localStorage.getItem('cartItems')).find(p => p.id === props.id)

  const [description, setDescription] = useState(productFormLocalCart.description || '');

  const handleItemDelete = (e) => {
    e.preventDefault();
    dispatch(deleteItemsFormCart(props.id));
  };

  const handleCountDown = (e) => {
    e.preventDefault();
    dispatch(productCountDown(props.id));
  };
  const handleCountUp = (e) => {
    e.preventDefault();
    dispatch(addItemToCart(props.id));
  };
  const handleAddDescription = (e) => {
    e.preventDefault();
    dispatch(addOrderDescription({id: props.id, description}))
  }
  const handleDeleteDescription = (e) => {
    e.preventDefault();
    dispatch(deleteOrderDescription(props.id))
    setDescription('')
  }
  return (
    <div>
      <Row>
        <Stack className="my-3" direction="horizontal" gap={3}>
          <img width="100px" src={`/${props.photos[0].url}`} />
          <h4>{props.name}</h4>
          <div className="ms-auto">
            <QuantityInput
              quantity={props.quantity}
              countDown={handleCountDown}
              countUp={handleCountUp}
            />
          </div>
          <div> Cena: {props.price * props.quantity} zł</div>
          
          <Button onClick={handleItemDelete}>Usuń</Button>
        </Stack>
        {props.quantity>4 && <div>Nasze produkty robione są ręcznie. Przy zamawianiu większej ilość czas oczekiwania na zamówienie może się wydłużyć. Dziękujemy za Twoje wsparcie!</div>}
      </Row>
      <Row>
        <InputGroup>
          <Form.Control
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Uwagi'
          />
          <Button onClick={handleAddDescription}>Dodaj</Button>
          <Button onClick={handleDeleteDescription}>&#10006;</Button>
        </InputGroup>
      </Row>

      <hr />
    </div>
  );
};
export default CartItem;
