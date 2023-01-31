import React from 'react';
import {useState,createContext,useEffect} from 'react';
export const CartContext =createContext();


const CartProvider = ({children}) => {
  //State*
  const [cart,setCart]=useState([]);
  const [itemAmount,setItemAmount]=useState(0);

  //total price
  const [total,setTotla]=useState(0);


  useEffect(()=>{
    const total=cart.reduce((accumulator,currentItem)=> {
      return accumulator + currentItem.price* currentItem.amount;
    },0);
    setTotla(total);
  });
//update item amount

useEffect(()=>{
  if(cart){
    const amount=cart.reduce((accumulator,currentItem)=> {
      return accumulator + currentItem.amount;
    },0);
    setItemAmount(amount);
  }
},[cart]);




  const addToCart=(product ,id)=>{
    const newItem={...product,amount : 1 };
    const cartItem=cart.find((item)=>{
      return item.id===id;
    });
    //console.log(cartItem);

    //if cart item is already in the cart
    if(cartItem){
      const newcart=[...cart].map(item=>{
        if(item.id===id){
          return{ ...item,amount : cartItem.amount + 1 };
        }else{
          return item;
        }
      });
      setCart(newcart);
    }
    else{
      setCart([...cart,newItem]);
    }
  }
  

  console.log(cart)
  //remove from cart 
  const removeFromCart=(id)=>{
    const newCart=cart.filter((item)=>{
      return item.id!==id;
    });
    setCart(newCart);
  }

  //clear cart
  const clearCart=()=>{
    setCart([]);
  }
  //increase amount 
  const increaseAmount=(id)=>{
    const item=cart.find((item)=>item.id===id);
    addToCart(item,id);
  }

  //decrease amount 
  const decreaseAmount=(id)=>{
  const cartItem=cart.find((item)=>{
    return item.id===id;
  });
  
  if(cartItem){
    const newcart=cart.map(item=>{
      if(item.id===id){
        return{ ...item,amount : cartItem.amount - 1 };
      }else{
        return item;
      }
    });
    setCart(newcart);
  }
    
      if(cartItem.amount<2){
        removeFromCart(id)
      }
  }
    
  
  return <CartContext.Provider value={{cart,total,addToCart,removeFromCart,itemAmount,clearCart,increaseAmount,decreaseAmount}}>{children}</CartContext.Provider>;
};

export default CartProvider;
/*
*/