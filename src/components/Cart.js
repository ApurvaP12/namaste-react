import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CategoryItemList from "./CategoryItemList";



const Cart = () => {

    const cartItems = useSelector((store)=> store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="cart-page-container" style={{width: "40%", margin: "0 auto" }}>
            
            <div className="cart-item-container text-center">
                <h1 className="m-4">⚒️Builing: Cart Page 🛠️ </h1>
                <button className="bg-black text-white rounded p-2 cursor-pointer" onClick={handleClearCart}>Clear Cart</button>

                {cartItems.length === 0 && <h2 className="m-4 font-bold">Your cart is Empty! Please add items to the cart.</h2>}
                <div className="category-wrapper max-w-full mt-4  bg-gray-50">
                    <CategoryItemList items={cartItems}/>
                </div>
                

            </div>
        </div>
    )
}

export default Cart;