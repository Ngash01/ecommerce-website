import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

export const ProductComponent = (props)=>{
  const {id, productName, productImage, price} = props.data;
  const {cartItems, addToCart, } = useContext(ShopContext);

  const addAmountToCart = cartItems[id]

  return <div className="product_">
    <img src={productImage} alt=""/>
    <div className="description">
      <p><b>{productName}</b></p>
      <p>ksh {price}</p>
    <button className="AddToCartButton" onClick={()=> addToCart(id)}>
      Add To Cart {addAmountToCart > 0 && <>({addAmountToCart})</>}
      </button>
    </div>
   </div>
}

