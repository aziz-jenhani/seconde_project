import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from '../components/Product';
import Hero from '../components/Hero';



const Home = () => {
  const { products } = useContext(ProductContext);
//  console.log(products);
  //filtrage de produit selon la categories
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return <div>
    <Hero/>
    <section>
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 gap-[30px] max-w-sm md:max-w-none
          md:mx-0 mx-auto md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {
              filteredProducts.map(product=>{
                return (<Product product={product} key={product.id}/>);
              })
            }
          </div>

        </div>
    </section>
  </div>;
};

export default Home;
/**/