import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addItemToCart, deleteItemsFormCart, productCountDown } from '../../../redux/cartRedux';
import QuantityInput from '../QuantityInput/QuantityInput';

const CartItem = props => {
    const dispatch = useDispatch();

    const handleItemDelete = e => {
        e.preventDefault();
        dispatch(deleteItemsFormCart(props.id))
    }

    const handleCountDown = e => {
        e.preventDefault();
        dispatch(productCountDown(props.id))
    }
    const handleCountUp= e=> {
        e.preventDefault();
        dispatch(addItemToCart(props.id))
    }
    return <div>
        <h2>{props.name}</h2>
        <QuantityInput count={props.count} countDown={handleCountDown} countUp={handleCountUp}/>
        <Button onClick={handleItemDelete}>Usuń</Button>
    </div>
}
export default CartItem