import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props)=>{
  const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)
  const {id, productImage, productName, price} = props.data;

  return <div className="cartItem">
    <img alt="" src={productImage}/>
    <div className="description">
      <p className="title"><b>{productName}</b></p>
      <p className="price">ksh {price}</p>
      <div className="count-handler">
        <button onClick={()=> removeFromCart(id)}>-</button>
        <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value), id)}/>
        <button onClick={()=> addToCart(id)}>+</button>
      </div>
    </div>
  </div>
}

