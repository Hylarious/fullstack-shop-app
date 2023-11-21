import { useDispatch, useSelector } from "react-redux";
import OrderForm from "../../features/OrderForm/OrderForm"
import { addOrderRequest, getCartProducts } from "../../../redux/cartRedux";

const CartSummary = () => {
    const dispatch = useDispatch();

    const productsIdWithInfo = useSelector(getCartProducts)
    console.log(productsIdWithInfo)
    const sendOrder = (orderData) => {
        if ( productsIdWithInfo && orderData)
          dispatch(
            addOrderRequest({
              orderData: { ...orderData },
              products:  productsIdWithInfo,
            }),
          );
      };
    return (
        
        <div>

            <OrderForm action={sendOrder}/>
        </div>
    )
 
}
export default CartSummary