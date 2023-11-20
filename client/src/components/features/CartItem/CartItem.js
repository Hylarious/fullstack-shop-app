import { Button, Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  addItemToCart,
  deleteItemsFormCart,
  productCountDown,
} from '../../../redux/cartRedux';
import QuantityInput from '../QuantityInput/QuantityInput';

const CartItem = (props) => {
  const dispatch = useDispatch();

  console.log(props);
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
  return (
    <div>
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
      <hr />
    </div>
  );
};
export default CartItem;
