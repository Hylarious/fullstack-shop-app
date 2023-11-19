import CartItem from "../CartItem/CartItem"

const CartItemsList = ({products}) => {
    return (
        <div>
            {products.map(p => <CartItem key={p.id} {...p} />)}
        </div>
    )
}
export default CartItemsList