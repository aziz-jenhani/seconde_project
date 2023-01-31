import React, { useContext } from 'react';
//import useParams
import { useParams } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';
//import cart context
import { CartContext } from '../contexts/CartContext'
//import product context
import { ProductContext } from '../contexts/ProductContext'
const ProductDetails = () => {
  //get the product id from the URL
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);


  //get the single Product

  const product = products.find(item => {
    return item.id === parseInt(id);
  });
  //if the product is not found
  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center '>
<Audio
  height="100"
  width="100"
  radius="9"
  color="red"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
      </section>
    )
  }
  //destructure product 
  const { title, price, decription, image } = product;

  return <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center">
        {/*image*/}
        <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
          <img className='max-w-[200px]' src={image} alt="" />
        </div>
        {/*text*/}
        <div className="flex-1 text-center lg:text-left">
          <h1 className='text-[26px] font-medium mb-2 max-w-[450] mx-auto'>{title}</h1>
          <div className="text-xl text-red-500 font-medium mb-6">$ {price}</div>
          <p className='mb-8 '>{decription}</p>
          <button onClick={()=>addToCart(product,product.id)} className='bg-primary text-white py-4 px-8'>Add to Cart</button>
        </div>
      </div>
    </div>
  </section>;
};

export default ProductDetails;
