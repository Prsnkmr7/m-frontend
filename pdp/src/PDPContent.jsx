import React, {useState, useEffect, useRef} from 'react'
import { getProductsbyID, currency } from 'home/products'
import {useParams} from "react-router-dom";
import placeAddToCart from "addtocart/placeAddToCart";

const PDPContent = () => {
  const [product, setProduct] = useState(null);
  const {id} = useParams();
  console.log(id);
  useEffect(() => {
    if (id) {
    getProductsbyID(id).then(setProduct);
    } else {
      setProduct(null);
    }
  }, [id]);
  const addToCart = useRef(null);
  useEffect(() => {
    if (addToCart.current) {
      placeAddToCart(addToCart.current, product.id);
    }
  }, [product]);
  if (!product) return null;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
          <div className="font-bold text-3xl flex-end">
            {currency.format(product.price)}
          </div>
        </div>
        <div ref={addToCart}></div>
        <div className="mt-10">{product.description}</div>
        <div className="mt-10">{product.longDescription}</div>
      </div>
    </div>
  );
}

export default PDPContent