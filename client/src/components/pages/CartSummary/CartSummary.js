import { useDispatch, useSelector } from "react-redux";
import OrderForm from "../../features/OrderForm/OrderForm"
import { addOrderRequest, getCartProducts } from "../../../redux/cartRedux";
import CartSummaryProduct from "../../features/CartSummeryProduct/CartSummaryProduct";

const CartSummary = () => {
    const dispatch = useDispatch();

    const productsIdWithInfo = useSelector(getCartProducts);

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
          {productsIdWithInfo.map(p => (<CartSummaryProduct key={p.id} id={p.id}/>))}
            <OrderForm action={sendOrder}/>
        </div>
    )
 
}
export default CartSummary