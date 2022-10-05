import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { renderLoading } from "../../utilities/Loader";

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [componentMounted, setComponentMounted] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        setData(await response.clone().json());
        setFilteredProducts(await response.json());
        setLoading(false);
      }
      return () => {
        setComponentMounted(false);
      };
    };
    getProducts();
  }, [componentMounted]);
  const filterProducts = (category) => {
    const updateList = data.filter((item) => item.category === category);
    setFilteredProducts(updateList);
  };
  const renderProducts = () => {
    return (
      <>
        <div className="row g-0">
          <div className="d-flex flex-wrap mb-5 justify-content-center">
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => setFilteredProducts(data)}
            >
              ALL
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProducts("men's clothing")}
            >
              Men's Clothing
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProducts("women's clothing")}
            >
              Women's Clothing
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProducts("jewelery")}
            >
              Jewelery
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProducts("electronics")}
            >
              Electronic
            </button>
          </div>
        </div>
        {filteredProducts.map((product) => (
          <React.Fragment key={product.id}>
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top"
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    Buy
                  </Link>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </>
    );
  };
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 mb-3">
          <h1 className="display-6 w-bolder text-center py-3">
            Lates Products
          </h1>
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? renderLoading() : renderProducts()}
      </div>
    </div>
  );
}
