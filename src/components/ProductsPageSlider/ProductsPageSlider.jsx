import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductsPageSlider = () => {
  const brand = useParams().brand;
  const [sliderImages, setSliderImages] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${brand}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  console.log(sliderImages);

  return (

  );
};

export default ProductsPageSlider;
