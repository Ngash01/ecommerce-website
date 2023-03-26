import { createContext, useState } from "react";
import { Products } from "../products";


export const ShopContext = createContext(null)

const getDefaultCart = ()=>{
  let cart = {}
  for(let i=1; i<Products.length+1; i++){
    cart[i] = 0;
  };
  return cart;
}

export const ShopContextProvider = (props)=>{
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const addToCart = (ItemId)=>{
    setCartItems((prev)=>({...prev, [ItemId]: prev[ItemId]+1}))
  }

  const getTotalAmount = ()=>{
    let TotalAmount = 0;
    for(const cartItem in cartItems){
      if(cartItem >0){
        let ItemInfo = Products.find((product)=> product.id=== Number(cartItem));
        TotalAmount += cartItems[cartItem]* ItemInfo.price;
      }
    }
    return TotalAmount;
  }
  
  const removeFromCart = (ItemId)=>{
    setCartItems((prev)=>({...prev, [ItemId]: prev[ItemId]-1}))
  }

  console.log(cartItems)

  const updateCartItemCount = (newAmount, itemId)=>{
    setCartItems((prev)=> ({...prev, [itemId]: newAmount}))
  }

  const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalAmount}

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}

