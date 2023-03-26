import { useContext} from "react"
import { ShopContext } from "../../context/shop-context"
import { Products } from "../../products"
import { CartItem } from "./cart-item"
import { useNavigate } from "react-router-dom"
import "./cart.css";

export const Cart = ()=>{
  const {cartItems, getTotalAmount} = useContext(ShopContext)
  const total_amount = getTotalAmount()
  const navigate = useNavigate()

  return <div className="cart">
   {total_amount > 0 && <div className="cart_Title">
      <h2>YOUR CART ITEMS</h2>
    </div>}

    <div className="cartItems">
      {Products.map((product)=>{
        if(cartItems[product.id]!== 0){
          return <CartItem data={product}/>
        }
        return null;
      })}
    </div>
    {total_amount > 0 ?(
    <div className="checkout">
      <p>Subtotal: ksh{total_amount}</p>
      <button onClick={()=>navigate('/')}>Continue Shopping</button>
      <button>Checkout</button>

    </div>)
: <h2 className="title_empty">YOUR CART IS EMPTY</h2>}
  </div>
}

