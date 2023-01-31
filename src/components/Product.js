import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {BsPlus,BsEyeFill} from 'react-icons/bs';
//import cart context
import {CartContext} from '../contexts/CartContext'




const Product = ({product}) => {
  const { addToCart }= useContext(CartContext);
const {id,image,category,title,price}=product;

  return <div className="my-10">
    <div className='border border-[#e4e4e4] h-[300px]  relative
  overflow-hidden group transition '>
    <div className="w-full h-full flex justify-center item-center">
      {/* image */}
      <div className="w-[200px] mx-auto flex justify-center items-center">
        <img className='max-h-[160px] group-hover:scale-110 duration-300' src={image} alt="" />
      </div>
      {/* buttons */}
      <div className=' absolute top-6 -right-11 group-hover:right-5  p-2 
      flex flex-col items-center duration-300 justify-center gap-y-2 opacity-0 transition-all group-hover:opacity-100'>
        <button>
          <div onClick={()=> addToCart(product,id)} className='flex justify-center items-center w-12 h-12 bg-red-500'>
            <BsPlus className='text-3xl'/>
          </div>
          </button>
          <Link to={`/product/${id}`} className="w-12 h-12 bg-white flex justify-center items-center
          drop-shadow-xl text-primary "><BsEyeFill/></Link>
      </div>

    </div>
  </div>
  {/*categories*/}
  <div className="">
      <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
      <Link to={`/product/${id}`}>
      <h2 className='font-semibold mb-1 '>{title}</h2></Link>
      <div className='font-semibold'>{price}</div>
        </div>
  </div>
};   

export default Product;
