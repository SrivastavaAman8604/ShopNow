import { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.css';
import { useStateValue } from './Component/StateProvider';

function Product() {
  const [product, setProduct] = useState([]);
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProduct(res.data);
      console.log(res.data);
    };
    fetchData();
  }, []); // Pass an empty dependency array

  const addToCart = (id, image, price,title) => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title:title,
        image: image,
        price: price,
      },
    });
  };

  return (
    <section className="py-5">
      <h2><u>Latest Product</u></h2>
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-4 row-cols-xl-4 justify-content-center">
          {product.map((prod) => (
            <div className="col mb-5" key={prod.id}>
              <div className="card h-100 text-center">
                <div className="text-center p-4">
                  <img className="card-img-top" src={prod.image} style={{ width: '50%' }} alt={prod.title} />
                </div>
                <div className="card-body p-4">
                  <div className="text-center">
                    <h6 className="fw-bolder">{prod.title.substring(0,12)}</h6>
                    ${prod.price}
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <button className="text-center btn btn-outline-dark p-1" onClick={() => addToCart(prod.id, prod.image, prod.price,prod.title)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
