import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../Product/Product";
import Swal from "sweetalert2";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const brand = useParams().brand;

  useEffect(() => {
    fetch(`https://10-brand-shop-server-six.vercel.app/products/${brand}`)
      .then((res) => res.json())
      .then((data) =>{
        setProducts(data)
        setLoading(false)
      } );
  }, []);

  return (
   !loading &&  <div className="my-10 ">
    <SectionHeading text={`Available ${brand}'s products`}/>
   {products.length ? (
     <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
       {products.map((product) => (
         <Product key={product._id} product={product} />
       ))}
     </div>
   ) : (
  
       <div className="card  max-w-xs mx-auto bg-neutral text-neutral-content">
         <div className="card-body items-center text-center">
           <h2 className="card-title">Sorry!</h2>
           <p>We Do not Have Any Products Of this Brand.</p>
           <div className="card-actions justify-end">
             <Link to="/">
               <button className="btn bg-[#E74C3C]">Go Back TO Home</button>
             </Link>
           </div>
         </div>
       </div>
    
   )}
 </div>
  );
};

export default ProductsContainer;
