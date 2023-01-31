import React from 'react';
import { Link } from 'react-router-dom';
import {IoMdAdd, IoMdClose} from 'react-icons/io';
import {IoMdRemove} from 'react-icons/io';
import { CartContext } from '../contexts/CartContext'
import { useContext } from 'react';
const CartItem = ({item}) => {
  const {removeFromCart,increaseAmount,decreaseAmount} =useContext(CartContext);
  const {id,title,image,price,amount}=item;
  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-4'>
        {/*image*/}
        <div>
          <Link to={`/product/${id}`}>
          <img src={image} alt=""  className='max-w-[80px]'/>
          </Link>
        </div>
        <div className=" w-full flex flex-col">
          {/*title remove icon*/}
          <div className="flex justify-between mb-2">
            <Link to={`/product/${id}`} className='text-sm uppercase font-medium text-primary hover:underline max-w-[240px]'>
              {title}
            </Link>
            {/*remove icon}*/}
            <div className=" text-xl cursor-pointer">
              <IoMdClose onClick={()=>removeFromCart(id)} className='text-gray-500 hover:text-red-500 transition'/>
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px] text-sm ">
            {/*quntite*/}
            <div className="flex flex-1 max-w-[100px]  items-center 
            h-full border text-primary font-medium">
              {/*Minis Icon*/}

              <div onClick={()=>decreaseAmount(id)} className="flex-1  h-full flex justify-center items-center cursor-pointer">
              <IoMdRemove  className='' />
              </div>

              <div className="h-full flex justify-center items-center px-2 ">{amount}</div>
              
              {/*Add Icon*/}
              <div  onClick={()=>increaseAmount(id)} className=" flex-1 h-full flex justify-center items-center cursor-pointer ">
              <IoMdAdd className=''/>
              </div>

            </div>
            <div className="flex-1 flex justify-around items-center font-medium ">$ {price}</div>
            <div className="flex-1 flex justify-end items-center font-medium ">{`$ ${parseFloat(price*amount).toFixed(2)}`}</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
